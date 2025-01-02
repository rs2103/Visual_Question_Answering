import React, { useState } from 'react';
import { Upload, Camera, Sparkles, RefreshCcw } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  const [image, setImage] = useState(null);
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const surpriseOptions = [
    'Does the image have a whale?',
    'Is the image fabulously pink?',
    'Does the image have puppies?',
    'What do you think happened right before this moment?',
    'If this image had a soundtrack, what song would be playing?',
    'What is the mood of the scene if it were a movie?',
    'What would the characters/people in this image be thinking right now?',
    'What smells would you expect to experience if you were in this picture?',
    'If this image was part of a dream, what would it symbolize?',
    'What is the temperature like in this picture?',
    'What is the one thing in this image that should not belong?',
    'If you could step into this image, what would you do first?',
    'What would you name this image if it were a painting?',
    'What is the secret hidden behind this image that nobody knows?',
    'If the objects/people in this image could talk, what would they say?',
    'What season does this image remind you of?',
    'What do you think this image looks like if viewed upside down?',
    'If this image was a meme, what would the caption be?'
  ];

  const surprise = () => {
    const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
  };

  const uploadImage = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    setImage(e.target.files[0]);
    e.target.value = null;
    try {
      const options = {
        method: 'POST',
        body: formData
      };
      const response = await fetch('http://localhost:8000/upload', options);
      const data = response.json();
      console.log(data);
    } catch(err) {
      console.log(err);
      setError("Something didn't work! Please try again...");
    }
  };

  const analyzeImage = async () => {
    setResponse("");
    if(!image) {
      setError("Error! Must have an existing image!");
      return;
    }
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          message: value
        }),
        headers: {
          "Content-Type": "application/json"
        }
      };
      const response = await fetch("http://localhost:8000/openai", options);
      const text = await response.text();
      setResponse(text);
    } catch(err) {
      console.log(err);
      setError("Something didn't work! Please try again...");
    }
  };

  const clear = () => {
    setImage(null);
    setValue("");
    setResponse("");
    setError("");
  };

  return (<>
    
    <div className=" min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <Navbar/>
      <br></br>
      <br></br>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Image Analyzer
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            {/* Image Upload Section */}
            <div className="flex justify-center">
              {image ? (
                <div className="relative group">
                  <img 
                    src={URL.createObjectURL(image)} 
                    alt="Uploaded" 
                    className="max-h-96 rounded-lg shadow-md"
                  />
                  <button
                    onClick={clear}
                    className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
                  >
                    <RefreshCcw className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Camera className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={uploadImage} 
                    accept="image/*"
                  />
                </label>
              )}
            </div>

            {/* Question Input Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-700 font-medium">
                  What would you like to know about the image?
                </p>
                <button
                  onClick={surprise}
                  disabled={response}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Random Questions
                </button>
              </div>

              <div className="flex gap-2">
                <input
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder="Ask something about the image..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
                {(!response && !error) ? (
                  <button
                    onClick={analyzeImage}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Analyze
                  </button>
                ) : (
                  <button
                    onClick={clear}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Response Section */}
            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            {response && (
              <div className="p-6 bg-purple-50 rounded-lg">
                <p className="text-gray-800 leading-relaxed">{response}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default App;