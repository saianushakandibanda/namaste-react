import React from 'react';
import ReactDOM from 'react-dom/client';

const HeadingComponent = () => (
<div>
    <Title/>
    <h1>Namste React Functional component</h1>
    <h2>react</h2>
</div>
)

const Title = () => (
    <h1>Heading Title</h1>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />)