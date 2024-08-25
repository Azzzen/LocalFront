import {
    Box,
    Divider,
    Grid,
    Slider,
    Stack,
    styled,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material'
import { toast } from 'react-toastify';
import { gql, useQuery } from "@apollo/client";
import client from "../../graphqlApollo";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import add_image from '../../assets/add_image.svg';
import plus_image from '../../assets/plus_image.svg';
import minus_image from '../../assets/minus_image.svg';
import { Center } from "../../informationPage/Information";
import Loading from '../loading/Loading';
import Forbidden from "../forbidden/Forbidden";
import BlurryBackground from '../blurryBackground/BlurryBackground';

type InputQuestion = {
    questionId: string,
    criteria_application: string,
    user_response_type: string,
    factor: number,
    minimize: boolean
}

type AdditionalCriteria = {
    result: string,
    question: InputQuestion
}

type CriteriaInputType = {
    name: string,
    id: number
}

type TransportInputType = {
    name: string,
    percent: number,
    id: number
}

type ArticleQueryContent = {
    name: string,
    brand: string,
    redirection_url: string,
    material: CriteriaInputType[],
    country: CriteriaInputType[],
    transport: TransportInputType[],
    price: number,
    image: string,
    description: string,
    environnementdesc: string,
    ethicaldesc: string,
    additionalCriteria: AdditionalCriteria[],
    type: string
}

type QuestionContent = {
    id: string,
    tag: string,
    content: string,
    criteria_target: string,
    criteria_application: string,
    user_response_type: string,
    factor: number,
    minimize: boolean
}

export const TextInputField = styled(TextField)(({ theme }) => ({
    width: '100%',
    input: {
        color: theme.palette.gray.dark, height: '0.5vh', border: '1px solid gray.light',
    },
}));

export const TwoElementStack = styled(Stack)(({ theme }) => ({
    rowGap: '1vh'
}));

const ToggleGroupObject = ({ onChange = (value: boolean) => { return; } }) => {
    const [toggleValue, setToggleValue] = useState<0 | 1 | 2>(0);

    return (<ToggleButtonGroup value={toggleValue} onChange={(event, newValue) => {
        setToggleValue(newValue);
        onChange(newValue == 1)
    }} exclusive>
        <ToggleButton value={1}><Typography>Vrai</Typography></ToggleButton>
        <ToggleButton value={2}><Typography>Faux</Typography></ToggleButton>
    </ToggleButtonGroup>);
}

export default function AddArticle() {
    const [isLoading, setLoading] = useState(true);
    const [cookies] = useCookies(['token']);
    const { loading, error, data } = useQuery(gql`
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
    `, {
        client, context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }
    });

    const [questions, setQuestions] = useState<QuestionContent[]>([])
    const [articleData, setArticleData] = useState<ArticleQueryContent>({
        name: '',
        brand: '',
        redirection_url: '',
        material: [],
        country: [],
        transport: [],
        price: -1,
        image: '',
        description: '',
        environnementdesc: '',
        ethicaldesc: '',
        additionalCriteria: [],
        type: ''
    });

    useEffect(() => {
        if (!loading && !error && data) {
            setLoading(false);
            const temporaryQuestions: QuestionContent[] = []
            data.getAllQuestions.forEach((question: QuestionContent) => {
                if (!(question.criteria_target === 'article_partner')) return
                temporaryQuestions.push(question);
            })
            setQuestions(temporaryQuestions);
        }
    }, [loading, error, data]);

    const AddImageButton = () => {
        return (
            <Center component={'label'} height={'100%'} width={'100%'} bgcolor={'white.light'} border={'solid 1px'} borderRadius={'20px'} borderColor={'gray.light'}>
                {articleData.image == ''
                    ? <img src={add_image} style={{ width: '10vw', height: '10vh' }} />
                    : <img src={articleData.image} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                }
                <input type={'file'} accept={'image/gif, image/jpeg, image/png, image/webp'} onChange={(value: any) => {
                    if (!value || !value.target || !value.target.files)
                        return;
                    const reader = new FileReader();
                    reader.readAsDataURL(value.target.files[0]);
                    reader.onloadend = () => {
                        const base64Image = reader.result?.toString();
                        if (base64Image)
                            setArticleData({ ...articleData, image: base64Image });
                    }
                }} style={{ display: 'none' }} />
            </Center>
        )
    }

    const getAppropriateObject = (question: QuestionContent) => {
        switch (question.user_response_type) {
            case 'text':
            case 'number':
                return <TextInputField onChange={(value: any) => {
                    try {
                        articleData.additionalCriteria.push({
                            result: value.currentTarget.value, question: {
                                questionId: question.id,
                                criteria_application: question.criteria_application,
                                user_response_type: question.user_response_type,
                                factor: question.factor,
                                minimize: question.minimize
                            }
                        })
                    } catch (err) {
                        console.error(err);
                    }
                }} />
            case 'range':
                return <Slider onChange={(value: any) => {
                    try {
                        articleData.additionalCriteria.push({
                            result: value.toString(), question: {
                                questionId: question.id,
                                criteria_application: question.criteria_application,
                                user_response_type: question.user_response_type,
                                factor: question.factor,
                                minimize: question.minimize
                            }
                        });
                    } catch (err) {
                        console.error(err);
                    }
                }} />
            case 'boolean':
                return <ToggleGroupObject onChange={(value: boolean) => {
                    try {
                        articleData.additionalCriteria.push({
                            result: value ? 'true' : 'false', question: {
                                questionId: question.id,
                                criteria_application: question.criteria_application,
                                user_response_type: question.user_response_type,
                                factor: question.factor,
                                minimize: question.minimize
                            }
                        })
                    } catch (err) {
                        console.error(err);
                    }
                }} />;
            default:
                return <></>
        }
    }

    const sendToDataBase = () => {
        if (articleData.name == '' || articleData.material.length < 1 || articleData.country.length < 1 || articleData.transport.length < 1 || articleData.price == -1 || articleData.image == '' || articleData.description == '' || articleData.environnementdesc == '' || articleData.ethicaldesc == '') {
            console.error('Some field are empty')
            return;
        }
        const queryText = `query {createArticlePartner (
            name: "${articleData.name}"
            redirection_url:"${articleData.redirection_url}"
            material: [${articleData.material.map(material => `{name: "${material.name}"}`)}]
            country: [${articleData.country.map(country => `{name: "${country.name}"}`)}]
            transport: [${articleData.transport.map(transport => `{name: "${transport.name}", percent: ${transport.percent}}`)}]
            price: ${articleData.price}
            image: "${articleData.image}"
            description: "${articleData.description}"
            environnementdesc: "${articleData.environnementdesc}"
            ethicaldesc: "${articleData.ethicaldesc}"
            additionalCriteria: [${articleData.additionalCriteria.map(article => {
            return `{result: "${article.result}", 
                question: {
                          questionId: "${article.question.questionId}"
                          criteria_application: "${article.question.criteria_application}"
                          user_response_type: "${article.question.user_response_type}"
                          factor: ${article.question.factor}
                          minimize: ${article.question.minimize}
                }}`
        })}]
          ) {
            status
            devMessage
            userMessage
          }}`;
        const qr = gql(queryText);
        client.query({
            query: qr,
            context: {
                headers: {
                    authorization: "Bearer " + cookies.token,
                },
            }
        })
            .catch(() => {
                toast.error('An error occurred while adding the article. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        window.location.reload();
    }

    const VariableRowTextInputField = (criteriaName: string) => {
        const [lines, setLines] = useState<{ id: number, element: JSX.Element }[]>([]);

        const addLine = () => {
            let newIndex = 0;
            for (; newIndex <= lines.length; newIndex++) {
                let isIn = false;
                for (let j = 0; j < lines.length; j++) {
                    if (lines[j].id === newIndex) {
                        isIn = true;
                    }
                }
                if (!isIn) {
                    break;
                }
            }
            switch (criteriaName) {
                case 'transport':
                    articleData.transport.push({ id: newIndex, name: '', percent: -1 });
                    setLines([...lines, {
                        id: newIndex, element: <Grid container xs={10} item>
                            <Grid item xs={5} paddingRight={'0.5vw'}>
                                <TextInputField placeholder={'Ex: avion'} onChange={(value: any) => {
                                    const transportData = articleData.transport.find(transport => transport.id === newIndex);
                                    if (transportData)
                                        transportData.name = value.target.value;
                                }}></TextInputField>
                            </Grid>
                            <Grid item xs={5} paddingRight={'0.25vw'} paddingLeft={'0.25vw'}>
                                <TextInputField placeholder={'Ex: 80km'} onChange={(value: any) => {
                                    const transportData = articleData.transport.find(transport => transport.id === newIndex);
                                    if (transportData)
                                        try {
                                            const numberRegex = new RegExp('^[0-9]*$');
                                            if (!numberRegex.exec(value.target.value))
                                                return;
                                            transportData.percent = Number(value.target.value);
                                        } catch (err) {
                                            console.error(err)
                                        }
                                }}></TextInputField>
                            </Grid>
                        </Grid>
                    }]);
                    break;
                case 'country':
                    articleData.country.push({ id: newIndex, name: '' });
                    setLines([...lines, {
                        id: newIndex, element: <Grid item xs={10}>
                            <TextInputField placeholder={'Ex: France'} onChange={(value: any) => {
                                const countryData = articleData.country.find(country => country.id === newIndex);
                                if (countryData)
                                    countryData.name = value.target.value;
                            }}></TextInputField>
                        </Grid>
                    }]);
                    break;
                case 'material':
                    articleData.material.push({ id: newIndex, name: '' });
                    setLines([...lines, {
                        id: newIndex, element: <Grid item xs={10}>
                            <TextInputField placeholder={'Ex: Coton'} onChange={(value: any) => {
                                const materialData = articleData.material.find(material => material.id === newIndex);
                                if (materialData)
                                    materialData.name = value.target.value;
                            }}></TextInputField>
                        </Grid>
                    }]);
                    break;
                default:
                    break;

            }
        }

        const removeLine = (lineId: number) => {
            switch (criteriaName) {
                case 'transport':
                    setArticleData({
                        ...articleData,
                        transport: articleData.transport.filter(transport => transport.id !== lineId)
                    })
                    break;
                case 'country':
                    setArticleData({
                        ...articleData,
                        country: articleData.country.filter(country => country.id !== lineId)
                    })
                    break;
                case 'material':
                    setArticleData({
                        ...articleData,
                        material: articleData.material.filter(material => material.id !== lineId)
                    })
                    break;
                default:
                    break;
            }
            setLines(lines.filter(line => line.id !== lineId));
        }

        if (lines.length < 1)
            addLine();

        return (
            <Stack rowGap={'1vh'}>
                {lines.map((line) => {
                    return (
                        <Grid container alignItems={'center'}>
                            {line.element}
                            <Grid item xs={1} alignItems={'center'} container paddingRight={'0.25vw'}
                                paddingLeft={'0.25vw'}>
                                <img src={plus_image} onClick={() => addLine()} />
                            </Grid>
                            {lines.length > 1 && <Grid item xs={1} alignItems={'center'} container>
                                <img src={minus_image} onClick={() => removeLine(line.id)} />
                            </Grid>}
                        </Grid>
                    )
                })}
            </Stack>
        )
    }

    return (!cookies.token ? <Forbidden /> :
        <Box width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
            <BlurryBackground />
            <Box alignItems="center" bgcolor={'white.main'} borderRadius={'20px'} width={'70vw'} height={'70vh'}
                display={"flex"}
                sx={{ boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 8%)", '&::-webkit-scrollbar': { display: 'none' } }}
                overflow={'auto'}>
                <Loading open={isLoading} />
                <Stack width={"95%"} height={"90%"} marginX={'auto'} spacing={'0vh'}>
                    <Box>
                        <Typography variant={'h1'}>Ajouter un article</Typography>
                    </Box>
                    <Grid container width={'100%'} rowSpacing={'4vh'}>
                        <Grid item xs={6} paddingRight={'3vw'} container rowGap={'4vh'}>
                            <TwoElementStack width={'100%'}>
                                <Typography variant={'h2'}>Mon produit</Typography>
                                <Divider />
                            </TwoElementStack>
                            <Grid item container width={'80%'}>
                                <Grid item xs={6} paddingRight={'2vw'}>
                                    <AddImageButton />
                                </Grid>
                                <Grid item xs={6} rowGap={'2vh'} container>
                                    <TwoElementStack>
                                        <Typography variant={'h3'}>Titre du produit</Typography>
                                        <TextInputField placeholder={'Ex: robe longue fushia'} onChange={(value: any) => {
                                            setArticleData({ ...articleData, name: value.target.value })
                                        }}></TextInputField>
                                    </TwoElementStack>
                                    <TwoElementStack>
                                        <Typography variant={'h3'}>Prix</Typography>
                                        <TextInputField placeholder={'Ex: 10'} onChange={(value: any) => {
                                            try {
                                                const numberRegex = new RegExp('^[0-9]*$');
                                                if (!numberRegex.exec(value.target.value))
                                                    return;
                                                setArticleData({ ...articleData, price: Number(value.target.value) })
                                            } catch (err) {
                                                console.error(err);
                                            }
                                        }}></TextInputField>
                                    </TwoElementStack>
                                    <TwoElementStack>
                                        <Typography variant={'h3'}>Description</Typography>
                                        <TextInputField placeholder={'Cette robe fushia...'} onChange={(value: any) => {
                                            setArticleData({ ...articleData, description: value.target.value })
                                        }}></TextInputField>
                                    </TwoElementStack>
                                    <TwoElementStack>
                                        <Typography variant={'h3'}>Url de l'article</Typography>
                                        <TextInputField placeholder={'Ex: robe longue fushia'} onChange={(value: any) => {
                                            setArticleData({ ...articleData, redirection_url: value.target.value })
                                        }}></TextInputField>
                                    </TwoElementStack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} paddingLeft={'3vw'} container alignContent={'start'} rowGap={'4vh'}>
                            <TwoElementStack width={'100%'}>
                                <Typography variant={'h2'}>Description</Typography>
                                <Divider />
                            </TwoElementStack>
                            <Grid item rowGap={'2vh'} container width={'100%'}>
                                <TwoElementStack width={'100%'}>
                                    <Typography variant={'h3'}>Quels sont les efforts éthique apporté à cette
                                        article?</Typography>
                                    <TextInputField multiline rows={2} onChange={(value: any) => {
                                        setArticleData({ ...articleData, environnementdesc: value.target.value })
                                    }}
                                        placeholder={'Ex: Cet article est produit 100% en france dans la ville de Mans'}></TextInputField>
                                </TwoElementStack>
                                <TwoElementStack width={'100%'}>
                                    <Typography variant={'h3'}>Quels sont les efforts écologique apporté à cette
                                        article?</Typography>
                                    <TextInputField multiline rows={2} onChange={(value: any) => {
                                        setArticleData({ ...articleData, ethicaldesc: value.target.value })
                                    }}
                                        placeholder={'Ex: Cet article est composé uniquement de coton bio en provenance de l’europe'}></TextInputField>
                                </TwoElementStack>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} rowGap={'4vh'} container>
                            <TwoElementStack width={'100%'}>
                                <Typography variant={'h2'}>Composition et provenance</Typography>
                                <Divider />
                            </TwoElementStack>
                            <Grid item container direction={"row"} width={'100%'}>
                                <Grid item xs={4} paddingRight={'3vw'}>
                                    <TwoElementStack>
                                        <Typography variant={'h3'}>Matière</Typography>
                                        {VariableRowTextInputField('material')}
                                    </TwoElementStack>
                                </Grid>
                                <Grid item xs={4} paddingRight={'1.5vw'} paddingLeft={'1.5vw'}>
                                    <TwoElementStack>
                                        <Typography variant={'h3'}>Origine</Typography>
                                        {VariableRowTextInputField('country')}
                                    </TwoElementStack>
                                </Grid>
                                <Grid item xs={4} container paddingLeft={'3vw'}>
                                    <TwoElementStack>
                                        <Typography variant={'h3'}>Moyen d'acheminent et distance</Typography>
                                        {VariableRowTextInputField('transport')}
                                    </TwoElementStack>
                                </Grid>
                            </Grid>
                        </Grid>
                        {questions.filter(question => question.criteria_application === 'ecological').length > 0 &&
                            <Grid item xs={6} rowGap={'4vh'} container>
                                <TwoElementStack>
                                    <Typography variant={'h2'}>Information écologique supplémentaire</Typography>
                                    <Divider />
                                </TwoElementStack>
                                <Stack spacing={2}>
                                    {questions.filter(question => question.criteria_application === 'ecological').map(question => {
                                        return (<TwoElementStack>
                                            <Typography variant={'h3'}>{question.content}</Typography>
                                            {getAppropriateObject(question)}
                                        </TwoElementStack>)
                                    })}
                                </Stack>
                            </Grid>}
                        {questions.filter(question => question.criteria_application === 'ethical').length > 0 &&
                            <Grid item xs={6} rowGap={'4vh'} container>
                                <TwoElementStack>
                                    <Typography variant={'h2'}>Information éthique supplémentaire</Typography>
                                    <Divider />
                                </TwoElementStack>
                                <Stack spacing={2} height={'100%'}>
                                    {questions.filter(question => question.criteria_application === 'ethical').map(question => {
                                        return (<TwoElementStack>
                                            <Typography variant={'h3'}>{question.content}</Typography>
                                            {getAppropriateObject(question)}
                                        </TwoElementStack>)
                                    })}
                                </Stack>
                            </Grid>}
                        <Grid item container xs={12} justifyContent={'center'} marginBottom={'3vh'}>
                            <Center bgcolor={'green.main'} borderRadius={'5px'} width={'100%'} maxWidth={'10vw'}
                                height={'5vh'} paddingX={'1vw'}
                                onClick={() => sendToDataBase()} sx={{ ":hover": { cursor: "pointer" } }}>
                                <Typography variant={'button'} color={'white.light'}>Ajouter l'article</Typography>
                            </Center>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </Box>)
}