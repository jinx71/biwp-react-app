import React from 'react';

const Home = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("a")
    }
    return (
        <div className='mx-10 lg:mx-auto min-h-screen card flex flex-col lg:flex-row justify-between items-center gap-10'>
            <div className="card-body border rounded-lg mx-5 my-5 py-10 w-full md:w-48">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Enter a sentence</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Enter a sentence"></textarea>
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
                <ol className='list-item list-inside'>
                    <li>
                        <div className='p-2 my-2 bg-green-300 rounded-lg'>
                            <p>Entered Sentence : <span>Hello world</span></p>
                            <p>Entered Letter : <span>r</span></p>
                            <p>Output : <span>ld</span></p>
                        </div>
                    </li>
                    <li>
                        <div className='p-2 my-2 bg-pink-300 rounded-lg'>
                            <p>Entered Sentence : <span>Hello world</span></p>
                            <p>Entered Letter : <span>r</span></p>
                            <p>Output : <span>The letter does not exist in the sentence </span></p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Home;