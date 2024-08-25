import Select from 'react-select'
import {createRef, RefObject, useEffect, useState} from "react";
import {DocumentNode, gql, useQuery} from "@apollo/client";
import client from "./graphqlApollo";
import {useCookies} from "react-cookie";

type QuestionContent = {
    id: number;
    tag: string;
    content: string;
    criteria_target: string;
    criteria_application: string,
    user_response_type: string,
    factor: number,
    minimize: boolean
};
type SelectedContent = { value: string, label: string, dbKeys: string[] } | undefined;

/**
 * @class
 * @classdesc The class does a group of Radio Buttons
 */
class RadioButtonGroup {
    private name: string;
    private values: string[];
    private selected: string;

    constructor(name: string, values: string[]) {
        this.name = name;
        this.values = values;
        this.selected = '';
    }

    getSelected(): string {
        return this.selected;
    }

    getName(): string {
        return this.name;
    }

    getRadioButtons(): JSX.Element {
        return <> {this.values.map(value => {
            return <input className='localshirt-radio-button' type={'radio'} name={this.name + '-' + value} value={value}
                          onChange={() => this.selected = value} content={value}/>
        })} </>
    }
}

const setUpQuestionTable = (): void => {
    const [cookies] = useCookies(['token']);

    let qr = gql(`
    query {
      updateQuestionByTag(
        tag: "tag"
        criteria_target: "all"
        criteria_application: ""
        user_response_type: "text",
        content: "What is its tag ?",
        factor: 0
        minimize: true 
      ) {status, devMessage}
    }`);
    client.query({
        query: qr, context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }
    });

    qr = gql(`
    query {
      updateQuestionByTag(
        tag: "criteria_target"
        criteria_target: "question"
        criteria_application: ""
        user_response_type: "text",
        content: "Which criteria does that target ?",
        factor: 0
        minimize: true 
      ) {status, devMessage}
    }`);
    client.query({
        query: qr, context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }
    });

    qr = gql(`
    query {
      updateQuestionByTag(
        tag: "criteria_application"
        criteria_target: "question"
        criteria_application: ""
        user_response_type: "text",
        content: "What is it classification type ?",
        factor: 0
        minimize: true 
      ) {status, devMessage}
    }`);
    client.query({
        query: qr, context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }
    });

    qr = gql(`
    query {
      updateQuestionByTag(
        tag: "user_response_type"
        criteria_target: "question"
        criteria_application: ""
        user_response_type: "text",
        content: "In which form should the user respond ?",
        factor: 0
        minimize: true 
      ) {status, devMessage}
    }`);
    client.query({
        query: qr, context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }
    });

    qr = gql(`
    query {
      updateQuestionByTag(
        tag: "content"
        criteria_target: "question"
        criteria_application: ""
        user_response_type: "text",
        content: "What should be the question ?",
        factor: 0
        minimize: true 
      ) {status, devMessage}
    }`);
    client.query({
        query: qr, context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }
    });

    qr = gql(`
    query {
      updateQuestionByTag(
        tag: "factor"
        criteria_target: "question"
        criteria_application: ""
        user_response_type: "range",
        content: "What is its factor in the notation ?",
        factor: 0
        minimize: true 
      ) {status, devMessage}
    }`);
    client.query({
        query: qr, context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }
    });

    qr = gql(`
    query {
      updateQuestionByTag(
        tag: "minimize"
        criteria_target: "question"
        criteria_application: ""
        user_response_type: "boolean",
        content: "Is the smaller value the best one ?",
        factor: 0
        minimize: true 
      ) {status, devMessage}
    }`);
    client.query({
        query: qr, context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }
    });
}

function ModifyLocalScoreDataPage() {
    const [cookies] = useCookies(['token']);
    const [options] = useState<{ value: string, label: string, dbKeys: string[] }[]>([{
        value: 'question',
        label: "question",
        dbKeys: ['tag', 'content', 'criteria_target', 'criteria_application', 'user_response_type', 'factor', 'minimize']
    }]);
    const htmlObjectsRef: { ref: RefObject<HTMLInputElement>, question: QuestionContent }[] = [];
    const radioButtonGroupList: RadioButtonGroup[] = [];

    setUpQuestionTable();

    const [selectedOption, setSelectedOption] = useState<SelectedContent>();
    const [questions, setQuestions] = useState<QuestionContent[]>([]);
    const {loading, error, data} = useQuery(gql`
    query {
      getAllQuestions 
      {
        id
        tag
        content
        criteria_target
        criteria_application
        user_response_type
        factor
        minimize
      }
    }
    `, {client, context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }});

    useEffect(() => {
        if (!loading && !error && data) {
            const queryContent: QuestionContent[] = data.getAllQuestions.map((question: QuestionContent) => {
                if (options && !options.find((elem) => elem?.value === question.criteria_target || question.criteria_target == 'all')) {
                    options.push({
                        value: question.criteria_target, label: question.criteria_target, dbKeys: []
                    });
                }
                return {
                    id: question.id,
                    tag: question.tag,
                    content: question.content,
                    criteria_target: question.criteria_target,
                    criteria_application: question.criteria_application,
                    user_response_type: question.user_response_type,
                    factor: question.factor,
                    minimize: question.minimize
                };
            });
            setQuestions(queryContent);
        }
    }, [loading, error, data]);

    const handleChange = async (data: SelectedContent | null) => {
        if (data)
            setSelectedOption(data);
    };

    const convertResponse = (toConvert: string, type: string): string | number | boolean => {
        switch (type) {
            case 'number':
            case 'range':
                return Number(toConvert);
            case 'boolean':
                return toConvert == 'true';
            default:
                return `"${toConvert}"`;
        }
    }

    const sendToDatabase = async () => {
        const result: { question: QuestionContent, result: string }[] = [];
        htmlObjectsRef.map(object => {
            if (!object.ref.current?.value) {
                if (object.question.user_response_type == 'boolean') {
                    const radioButton = radioButtonGroupList.find(elem => elem.getName() == object.question.tag);
                    if (!radioButton) return;
                    result.push({question: object.question, result: radioButton.getSelected()});
                }
                return
            }

            const existingObjectTag = result.find(elem => elem.question.tag == object.question.tag);
            if (existingObjectTag) {
                existingObjectTag.result += `-${object.ref.current?.value}`;
            } else {
                result.push({question: object.question, result: object.ref.current?.value});
            }
        })
        let qr: DocumentNode;
        switch (selectedOption?.value) {
            case 'question':
                qr = gql(`query {
              createQuestion(
                ${['tag', 'content', 'criteria_target', 'criteria_application', 'user_response_type', 'factor', 'minimize'].map(tag => {
                    const resultQuestion = result.find(elem => elem.question.tag == tag);
                    if (!resultQuestion) return `${tag}: ""`
                    return `${tag}: ${convertResponse(resultQuestion.result, resultQuestion.question.user_response_type)}`;
                }).join('\n')}
              ), {status, content}
            }`);
                break;
            default:
                qr = gql(`query {
                  createCriteria(
                    tag: "${result.find(elem => elem.question.tag == 'tag')?.result}"
                    type: "${selectedOption?.value}"
                    additionalCriteria: [
                        ${result.map(question => {
                    return `{result: "${question.result}"
                                    question: {
                                        questionId: ${question.question.id}
                                        criteria_application: "${question.question.criteria_application}"
                                        user_response_type: "${question.question.user_response_type}"
                                        factor: ${question.question.factor}
                                        minimize: ${question.question.minimize}
                                    }}`;
                })}
                  ]), {status, content}
                }`);
                break;
        }
        client.query({
            query: qr, context: {
                headers: {
                    authorization: "Bearer " + cookies.token,
                },
            }
        });
    }

    const getInputForm = (question: QuestionContent, responseTypePart: string): JSX.Element => {
        const htmlObjectRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();
        const result: JSX.Element[] = [];
        const radioButtonGroup = new RadioButtonGroup(question.tag, ['true', 'false']);
        switch (responseTypePart) {
            case 'text':
            case 'number':
                result.push(<input type={responseTypePart} ref={htmlObjectRef} min={0}/>);
                htmlObjectsRef.push({ref: htmlObjectRef, question: question});
                break;
            case 'range':
                result.push(<input type={responseTypePart} ref={htmlObjectRef} min={0}/>);
                htmlObjectsRef.push({ref: htmlObjectRef, question: question});
                break;
            case 'boolean':
                radioButtonGroupList.push(radioButtonGroup);
                result.push(radioButtonGroup.getRadioButtons());
                htmlObjectsRef.push({ref: htmlObjectRef, question: question});
                break;
            default:
                return <p>Awaited response type: {responseTypePart} not recognized</p>
        }
        return <>{result.map(object => object)}</>
    }

    const displayModificationInterface = (): JSX.Element => {
        return (<>
            {selectedOption && selectedOption.dbKeys.length > 0 && selectedOption.dbKeys.map(questionTag => {
                const question = questions.find(elem => elem.tag == questionTag);
                if (!question) return <></>
                return <>
                    <p>{question.content}</p>
                    {question.user_response_type.split('-').map(responseTypePart => {
                        return getInputForm(question, responseTypePart);
                    })}
                </>
            })}
            {selectedOption && selectedOption.dbKeys.length == 0 && questions.filter(elem => elem.criteria_target == selectedOption?.value || elem.criteria_target == 'all').map(question => {
                return <>
                    <p>{question.content}</p>
                    {question.user_response_type.split('-').map(responseTypePart => {
                        return getInputForm(question, responseTypePart);
                    })}
                </>
            })}
            <button onClick={() => {
                sendToDatabase();
                setSelectedOption(undefined);
            }}>Submit
            </button>
        </>);
    }

    return (<>
        {!selectedOption && <>
            <p>Selectionner ce que vous voulez ajouter: </p>
            <Select options={options} value={selectedOption}
                    onChange={data => handleChange(data)}/>
        </>}
        <div className='center-container'>
            {selectedOption && <>
                <p>Selecting</p>
                <Select options={options} value={selectedOption} onChange={data => handleChange(data)}/>
            </>}
            {selectedOption && displayModificationInterface()}
        </div>
    </>);
}

export default ModifyLocalScoreDataPage;