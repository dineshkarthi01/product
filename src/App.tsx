import React from 'react';
import Form from 'react-json-form-schema';

const schema = {
  type: 'object',
  properties: {
    range: {
      type: 'object',
      properties: {
        min: {
          type: 'number',
          minimum: 0,
          maximum: 100,
          default: 0,
        },
        max: {
          type: 'number',
          minimum: 0,
          maximum: 100,
          default: 100,
        },
      },
    },
  },
};

const uiSchema = {
  range: {
    'ui:widget': 'range',
  },
};

function App() {
  const handleSubmit = (data: any) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Range Slider Widget</h1>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={handleSubmit}
        showErrorList={false}
      >
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default App;
