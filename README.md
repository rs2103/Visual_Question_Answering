
# Visual Question Answering (VQA) 🌐🤖

This project implements a **Visual Question Answering** system using deep learning techniques in **JavaScript**. The system allows users to ask questions about images, and the model will provide answers based on the visual content in the image.

## Table of Contents 📑

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Model Architecture](#model-architecture)
- [License](#license)
- [Contact](#contact)

## Introduction 📸❓

Visual Question Answering (VQA) combines the fields of **Computer Vision** and **Natural Language Processing** to allow a system to answer questions about the content of images. This project utilizes state-of-the-art deep learning models to process both images and text for accurate answers.

## Installation ⚙️

### Prerequisites 📦

Ensure that you have the following installed:

- Node.js (Version 14 or higher)
- npm (Node package manager)

### Setup Instructions 🛠️

1. Clone this repository:

    ```bash
    git clone https://github.com/subratadasGit/Visual_Question_Answering.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Visual_Question_Answering
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

## Usage 🚀

To run the model:

1. Place your image in the `images/` directory.
2. Run the VQA script:

    ```bash
    node vqa.js --image path_to_image --question "Your question here"
    ```

3. The model will output an answer based on the image and question provided.

## Model Architecture 🧠💻

The Visual Question Answering model combines **Convolutional Neural Networks (CNNs)** for image feature extraction and **Recurrent Neural Networks (RNNs)** for processing the textual input (questions). 

- **CNN**: Extracts features from the image.
- **RNN**: Processes the question and provides an answer based on the extracted features.

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📬

- **Author**: [Subrata Das](https://github.com/subratadasGit)
- **Email**: subratadasgit786@gmail.com
