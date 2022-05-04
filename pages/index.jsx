import React, { useState } from 'react';
import Image from 'next/image'

const Index = ({ }) => {

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

  const possibleAnswers = ["Çok şüpheli", "Konsantre ol ve tekrar sor", "Kesinlikle öye", "Belirtiler olduğu yönde", "Gördüğüm Kadarıyla, evet", "Kaynaklarım hayır diyor", "Biraz belirsiz tekrar dene", "Kuşkusuz", "Bana güvenebilirsin", "Yanıtım hayır", "Dışarıdan iyi görünüyor", "Pek iyi görünmüyor", "Sonra tekrar dene", "Şimdi tahmin edemem", "Çoğunlukla", "Şimdi söylemesem daha iyi", "Kesinlikle", "Evet", "Evet, elbette", "Milyon yıl geçse bile hayır", "Hayır!"]

  const answer = possibleAnswers[randomIndex];

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className={`contianer absolute max-w-8/12 w-8/12 max-h-5/6 h-5/6 border-2 border-gray-200 border-opacity-30 rounded flex items-center justify-center flex-col flex-wrap ${answer ? "space-y-6" : "space-y-10"}`}>
        {answer ?
          <>
            <div>
              <h1 className='text-3xl text-white'>İşte Cevabın...</h1>
            </div>
            <div className='relative flex justify-center'>
              <Image className='w-full max-w-[40em]' src='/answerside.png' width={550} height={434} alt="answer" />
              <p className='absolute text-white top-[36%] left-[46%] text-xs w-[11%] text-[80%] uppercase text-center m-0'>{answer}</p>
            </div>
            <div>
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mb-2" onClick={erase}>Geri Dön!</button>
            </div>
          </>
          :
          <>
            <div>
              <h1 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500'>Sihirli Top</h1>
            </div>
            <div>
              <Image src='/8ball.png' width={200} height={200} draggable={false} alt="8ball" />
            </div>
            <div className='flex justify-center w-1/2 flex-wrap flex-row space-y-6'>
              <input value={userInput} onChange={handleChange} type="text" className="text-sm rounded-lg  block w-full p-2.5 bg-neutral-600 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder='İlerde evlenebilecekmiyim?' required />
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mb-2" onClick={handleClick}>Topa Sor!</button>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default Index;