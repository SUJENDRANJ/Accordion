import React, { useState } from 'react';
import { ControlledAccordion, UncontrolledAccordion } from './components/Accordion';

// Sample data for the accordion
const accordionItems = [
  {
    title: 'What is the difference between controlled and uncontrolled components?',
    content: (
      <div>
        <p>
          <strong>Controlled components</strong> have their state managed by React through props and state updates.
          The parent component has full control over the component's behavior.
        </p>
        <p className="mt-2">
          <strong>Uncontrolled components</strong> manage their own state internally. The parent component has
          less control, but the implementation is often simpler.
        </p>
      </div>
    ),
  },
  {
    title: 'When should I use controlled components?',
    content: (
      <div>
        <p>Use controlled components when:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>You need to coordinate multiple components</li>
          <li>You need to validate input before state changes</li>
          <li>You need to enforce specific behaviors across components</li>
          <li>You need to implement complex UI interactions</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'When should I use uncontrolled components?',
    content: (
      <div>
        <p>Use uncontrolled components when:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>You want simpler code with less boilerplate</li>
          <li>The component can manage its own state independently</li>
          <li>You don't need to track every state change</li>
          <li>You're working with form elements that don't need validation</li>
        </ul>
      </div>
    ),
  },
];

function App() {
  const [isControlled, setIsControlled] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <div className="mb-6 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {isControlled ? 'Controlled' : 'Uncontrolled'} Accordion
          </h1>
          <button
            onClick={() => setIsControlled(!isControlled)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Switch to {isControlled ? 'Uncontrolled' : 'Controlled'}
          </button>
          <p className="mt-4 text-gray-600 text-sm text-center">
            {isControlled
              ? 'In this controlled accordion, the parent component manages which item is open.'
              : 'In this uncontrolled accordion, each accordion item manages its own open/closed state.'}
          </p>
        </div>

        {isControlled ? (
          <ControlledAccordion items={accordionItems} />
        ) : (
          <UncontrolledAccordion items={accordionItems} />
        )}
      </div>
    </div>
  );
}

export default App;