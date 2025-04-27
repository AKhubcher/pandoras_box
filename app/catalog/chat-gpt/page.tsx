//DO NOT WRITE CODE FROM SCRATCH, USE TEMPLATE FOR ALL MODELS CREATE TEMPLATE WITHIN THIS MODEL'S PAGE
export default function Home() {
    return (
        <div>
            <div className="flex bg-orange-600">
                <img src="/home/wing/repos/pandoras_box/public/file.svg" alt="sdfsdf" />
                <h1 className="text-red-200">AI Model Name</h1>
            </div>
            <div className="flex bg-red-600">
                <a href="https://openai.com/index/chatgpt/">model name</a>
                <a href="https://platform.openai.com/docs/guides/text">model name docs</a>
            </div>
            <h1>Introduction</h1>
            <p>Information about the model</p>
            <ol>Instructions
                <li> step 1</li>
                <li> step 2</li>
                <li> step 3</li>
                <li> step 4</li>
                <li> step 5</li>
                <li> step 6</li>
            </ol>
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-screen bg-gray-600"></div>
            <h2 className="fixed inset-y-32 right-0">Table of Contents</h2>
        </div>
    );
}


