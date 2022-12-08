import React, { useEffect, useState } from 'react';

const Home = () => {
    const [outputGenerated, setOutputGenerated] = useState(false)
    const [output, setOutput] = useState()
    const [sentence, setSentence] = useState()
    const [letter, setLetter] = useState()
    const restOfSentenceAfterLetter = (sentence, letter) => {
        const sentenceLowerCase = sentence.toLowerCase()
        const letterLowerCase = letter.toLowerCase()
        if (sentenceLowerCase.includes(letterLowerCase) && letterLowerCase !== " ") {
            const letterIndex = sentenceLowerCase.indexOf(letterLowerCase)
            const restofSentence = sentenceLowerCase.slice(letterIndex + 1)
            // console.log(restofSentence)
            return restofSentence
        }
        else {
            return "The letter does not exist in the sentence"
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const sentence = form.sentence.value.trim();
        const letter = form.letter.value.trim();
        // console.log(sentence, letter)
        setSentence(sentence);
        setLetter(letter)
        setOutput(restOfSentenceAfterLetter(sentence, letter))
        setOutputGenerated(true)
    }
    useEffect(() => {
        window.addEventListener('load', setOutputGenerated(false))
    }, [])
    // console.log(output)
    return (
        <><h1 class="text-3xl mt-10 text-center">Rest of the sentence finder</h1>
            <div className='mx-10 lg:mx-auto min-h-[70vh] card flex flex-col lg:flex-row justify-between items-center gap-10'>

                <div className="card-body border rounded-lg mx-5 my-5 py-10 w-full md:w-48">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Enter a sentence</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Enter a sentence" name='sentence'></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Enter a letter</span>
                            </label>
                            <input type="text" name="letter" placeholder="Enter an letter" className="input input-bordered" />

                        </div>

                        <div className="form-control mt-5">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>

                </div>
                <div className="card-body border rounded-lg mx-5 my-5 w-full md:w-48 ">
                    <h1 className="text-xl text-center">Output</h1>
                    <div className="divider"></div>
                    {
                        outputGenerated ? <div className={output === "The letter does not exist in the sentence" ? 'p-2 my-2 bg-pink-300 rounded-lg' : 'p-2 my-2 bg-green-300 rounded-lg'}>
                            <p>Entered Sentence : <span>{sentence}</span></p>
                            <p>Entered Letter : <span>{letter}</span></p>
                            <p>Output : <span>{output}</span></p>
                        </div> : null
                    }


                </div>
            </div>
        </>
    );
};

export default Home;