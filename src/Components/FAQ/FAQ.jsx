import React from 'react';

const faqData = [
    {
        question: "What is Fanta?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, cum!",
    },
    {
        question: "What flavors are available?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, cum!",
    },
    {
        question: "Is it gluten-free?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, cum!",
    },
    {
        question: "How many calories are in a can?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, cum!",
    },
];

const FAQ = () => {
    const [active, setActive] = React.useState(null);

    const handleClick = (index) => {
        setActive(index === active ? null : index);
    };

  return (
    <div className='max-w-2xl mx-auto mt-20 mb-28 py-4 px-4'>
        <h1 className='text-3xl font-bold text-center pb-8'>
            Frequently Asked Questions
        </h1>
        {faqData.map((item, index) => (
            <div key={index} className='mb-4 py-4 border-b border-gray-300'>
                <div className='flex justify-between items-center cursor-pointer py-4'
                onClick={() => handleClick(index)}>
                    <h3 className='text-xl font-semibold text-gray-800'>{item.question}</h3>
                    <span>{active === index ? "-" : "+"}</span>
                </div>
                {active === index && <p className='text-gray-600'>{item.answer}</p>}
            </div>
        ))}
    </div>
  );
};

export default FAQ;