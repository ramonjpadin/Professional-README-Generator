function fileGenerator(response) {
    var content = ` :kissing_heart: :kissing_heart: :kissing_heart:
    ## :brain:${response.userName}My Github!:flying_saucer:(${response.gitProfile}) Email!:bookmark_tabs:(${response.email})
    ## :blue_book:${response.license} 
    # ${response.title} by ${response.userName} !

## Description

:+1:
:thumbsup:${response.description}

- What was your motivation ?

:point_right::point_right::point_right: ${response.motivation}

## Table of Contents

    - [Installation](#installation)
    - [Credits](#credits)
    - [License](#license)

## Installation

:ok_hand: ${response.install}

## Credits

:pinching_hand: ${response.contributions} , These are my contributors : ${response.contributions2}

## License

:metal: ${response.license}

MIT License

Copyright (c) 2022 Ramon Padin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    return content;
};

module.exports = fileGenerator;