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
  }

  const erase = () => {
    setRandomIndex('');
    setError('');
  }

  const possibleAnswers = ["Çok şüpheli", "Konsantre ol ve tekrar sor", "Kesinlikle öyle", "Belirtiler olduğu yönde", "Gördüğüm Kadarıyla, evet", "Kaynaklarım hayır diyor", "Biraz belirsiz tekrar dene", "Kuşkusuz", "Bana güvenebilirsin", "Yanıtım hayır", "Dışarıdan iyi görünüyor", "Pek iyi görünmüyor", "Sonra tekrar dene", "Şimdi tahmin edemem", "Çoğunlukla", "Şimdi söylemesem daha iyi", "Kesinlikle", "Evet", "Evet, elbette", "Milyon yıl geçse bile hayır", "Hayır!"]

  const answer = possibleAnswers[randomIndex];

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='container flex justify-center items-center flex-col space-y-6'>
        <div className="w-8/12 h-4/6 flex items-center justify-center flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className={`flex flex-col items-center space-y-4 ${answer ? "" : "py-8"} `}>
            {
              answer ?
                <>
                  <div className="relative flex items-center">
                    <img width={567} src='/answerside.png' />
                    <p className='absolute text-white top-[38%] left-[45%] text-xs w-[11%] text-[80%] uppercase text-center flex items-center justify-center'>{answer}</p>
                  </div>
                </>
                :
                <>
                  <div><img className="w-48 rounded-full shadow-lg" src="/8ball.png" alt="Bonnie image" /></div>
                  <div><h5 className="text-xl font-medium text-gray-900 dark:text-white">Sihirli Top</h5></div>
                  <div><span className="text-sm text-gray-500 dark:text-gray-400">Kaderini Görmeye Hazırmısın?</span></div>
                  <div><input value={userInput} onChange={handleChange} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="O beni seviyor mu? ;)" required /></div>
                  <div><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center mb-2" onClick={handleClick}>Topa Sor!</button></div>
                </>
            }
          </div>
        </div>
        {
          answer &&
          <div className='w-8/12 h-4/6 flex items-center justify-center flex-col rounded-lg  p-3 bg-white  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 '>
            <button onClick={erase} type="button" class="mb-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">Tekrar Topa Sor!</button>
            <span className='text-gray-400 text-xs border-2 rounded p-1'><a className='text-red-400' href='https://www.umutk.codes'>Umut K.</a> & <a href="https://www.instagram.com/arrow_1566/" className='text-green-400'>Onur T.</a></span>
          </div>
        }
      </div>
    </div>
    // <div className='h-screen w-screen flex justify-center items-center flex-col p-40'>
    //   <div className={`contianer absolute max-w-full w-full max-h-full h-full border-2 border-gray-200 border-opacity-30 rounded flex items-center justify-center flex-col flex-wrap ${answer ? "space-y-6" : "space-y-10"}`}>
    //     {answer ?
    //       <>
    //         <div>
    //           <h1 className='text-3xl text-white'>İşte Cevabın...</h1>
    //         </div>
    //         <div className='relative flex justify-center'>
    //           <img src='/answerside.png' />
    //           {/* <Image className='w-full max-w-[40em]' src='/answerside.png' width={667} height={567} alt="answer" /> */}
    //           <p className='absolute text-white top-[38%] left-[45%] text-xs w-[11%] text-[80%] uppercase text-center flex items-center justify-center'>{answer}</p>
    //         </div>
    //         <div>
    //           <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mb-2" onClick={erase}>Geri Dön!</button>
    //         </div>
    //       </>
    //       :
    //       <>
    //         <div>
    //           <h1 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500'>Sihirli Top</h1>
    //         </div>
    //         <div>
    //           <img src='/8ball.png' width={300} draggable={false} alt="8ball" />
    //         </div>
    //         <div className='flex justify-center w-1/2 flex-wrap flex-row space-y-6'>
    //           <input value={userInput} onChange={handleChange} type="text" className="text-sm rounded-lg  block w-full p-2.5 bg-neutral-600 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder='İlerde evlenebilecekmiyim?' required />
    //           <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mb-2" onClick={handleClick}>Topa Sor!</button>
    //         </div>
    //       </>
    //     }
    //   </div>
    // </div>
  );
}

export default Index;