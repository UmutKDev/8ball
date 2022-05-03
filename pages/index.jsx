import React, { useState } from 'react';
import Image from 'next/image'

const Index = () => {

  const [userInput, setUserInput] = useState('');
  const [randomIndex, setRandomIndex] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setUserInput(event.target.value);
  }

  const handleClick = () => {

    if (userInput) {
      setError('')
      setRandomIndex(Math.round(Math.random() * 20));
      setUserInput('');
    }
    else {
      setError('Enter a question to know the answer!')
    }
    console.log(randomIndex);
  }

  const erase = () => {
    setRandomIndex('');
    setError('');
  }


  const possibleAnswers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Most likely',
    'Outlook not so good',
    'Very doubtful'
  ];
  const answer = possibleAnswers[randomIndex];

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className={`contianer absolute max-w-8/12 w-8/12 max-h-5/6 h-5/6 border-2 rounded flex items-center justify-center flex-col flex-wrap ${answer ? "-space-y-3" : "space-y-6"}`}>
        {answer ?
          <>
            <div>
              <h1 className='text-3xl'>İşte Cevabın...</h1>
            </div>
            <div className='relative flex justify-center'>
              <Image className='w-full max-w-[40em]' src='/magic_ball.png' width={640} height={518} />
              <p className='absolute text-white top-[39%] left-[47%] text-xs w-[11%] text-[80%] uppercase text-center m-0'>{answer}</p>
            </div>
            <div>
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2" onClick={erase}>Geri Dön!</button>
            </div>
          </>
          :
          <>
            <div>
              <h1 className='text-5xl'>Sihirli Top</h1>
            </div>
            <div>
              <Image src='/8ball.png' width={200} height={200} draggable={false} />
            </div>
            <div className='flex justify-center w-1/2 flex-wrap flex-row space-y-6'>
              <input id="message" value={userInput} onChange={handleChange} rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..." />
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2" onClick={handleClick}>Top'a Sor!</button>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default Index;

// {/* <div>
// <h1 className='text-5xl'>Sihirli Top</h1>
// </div>
// <div>
// {/* <Image className='rounded-lg' src='/magic_ball.jpg' width={450} height={355} /> */}
// <Image src='/8ball.png' width={200} height={200} draggable={false} />
// </div >
//   <div className='flex justify-center w-1/2 flex-wrap flex-row space-y-6'>
//     <input id="message" value={userInput} onChange={handleChange} rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..." />
//     <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2" onClick={handleClick}>Top'a Sor!</button>
//   </div> * /}