//import React, { useState } from 'react';
import axios from 'axios';

export const GetResponse = async (apikey: string, prompt: string, result: (arg0: string) => void) => {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apikey}`,
  };
  const requestBody = {
    model: "gpt-4o",
    messages: [{role: 'system', content: 'You are an agent that assist people with finding career suggestions. You always respond in the exact format requested, without any additional comments.'}, { role: 'user', content: prompt }],
  };

  /*
  const { data } = await axios.post(apiUrl, requestBody, { headers });

  try{
    let response:string = data.choices[0].message.content;
    let c1 = response.substring(response.indexOf("Career 1:"), response.indexOf("Career 2:"));
    let c2 = response.substring(response.indexOf("Career 2:"), response.indexOf("Career 3:"));
    let c3 = response.substring(response.indexOf("Career 3:"), response.length);
    result(`${c1}|${c2}|${c3}`);
  }
  catch(error){
    console.log("Error parsing GPT response!");
    console.log(error);
    result(data.choices[0].message.content);
  }
  */
  result("Career 1: Software Engineer. You like money.|Career 2: Data Scientist. You really like money.|Career 3: Nvidia Software Engineer. You really, REALLY like money.");
}

export function utils_answers_to_list(dict: { [key: number]: string }): string[] {
  return Object.values(dict);
}

export function utils_questions_to_list(dict: { id: number, questionText: string }[]): string[] {
  let vals: string[] = [];
  for (let i of dict) {
    vals = [...vals, i.questionText];
  }
  return vals;
}
