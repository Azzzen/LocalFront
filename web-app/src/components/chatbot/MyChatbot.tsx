import React, { useEffect, useState } from "react";
import ChatBot from "react-chatbotify";

interface Flow {
    start: {
      message: string;
      options: string[];
      path: string;
    };
    process_options: {
      responses: {
        [key: string]: string;
      };
      default: string;
    };
    loop: {
      message: string;
      options: string[];
      path: string;
    };
  }

export default function MyChatBot() {
    const [flow, setFlow] = useState<Flow | null>(null);

    useEffect(() => {
        fetch("/botflow.json")
            .then(response => response.json())
            .then(data => setFlow(data))
            .catch(error => console.error("Error loading bot flow:", error));
    }, []);

    if (!flow) {
        return <div>Loading...</div>;
    }

    const processOptions = (params: any) => {
        const response = flow.process_options.responses[params.userInput] || flow.process_options.default;
        return response;
    }

    const updatedFlow = {
        ...flow,
        process_options: {
            ...flow.process_options,
            message: processOptions
        }
    }

    return (
        <ChatBot flow={updatedFlow} />
    );
}
