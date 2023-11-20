import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import Jenkins from 'jenkins';

// Define the template action for making an HTTP POST request
export const postHttpRequestAction = () => { 
return createTemplateAction<{ url: string; user: string; apiToken: string }>({
  id: 'jenkins:post:job',
  description: 'Make an HTTP POST request',
  schema: {
    input: {
      required: ['url', 'user', 'apiToken'],
      type: 'object',
      properties: {
        url: {
          type: 'string',
          title: 'url',
          description: 'The URL to make the POST request to',
        },
        user: {
          type: 'string',
          title: 'User',
          description: 'The user to include in the POST request body',
        },
        apiToken: {
          type: 'string',
          title: 'apiToken',
          description: 'The apiToken to include in the POST request body',
        },
      },
  },
  },
  async handler(ctx) {
    try {

      const jenkins = new Jenkins({
        baseUrl: "http://user:pass@localhost:8080",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Authorization': `Basic ${btoa(`${ctx.input.user}:${ctx.input.apiToken}`)}`
        },
      });
      const response = await jenkins.job.build("Test");
      console.log('HTTP POST response:', JSON.stringify(response));
      // const response = await fetch(ctx.input.url, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin' : '*',
      //     'Authorization': `Basic ${btoa(`${ctx.input.user}:${ctx.input.apiToken}`)}`
      //   },
      // });
      // console.log('HTTP POST response:', JSON.stringify(response));
      // const responseData = await JSON.stringify(response);
      // console.log('HTTP POST response:', responseData);
      // Handle the response data as needed
    } catch (error) {
      console.error('Error making HTTP POST request:', error);
      // Handle the error as needed
    }
  },
});
};
