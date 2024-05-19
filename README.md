# HTML_CSS_JS_OLD_NOT-COMPLEATED_PROJECT

A small front-end project using HTML, CSS, and JavaScript to create a gallery website.
![](repo-image/name.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

  <!-- intro -->

## Introduction

This project is a gallery to share pictures with your friends on the site.
<br>
I decided to code this front-end project to practice while I was learning PHP. However, it was deprecated in the end, and I stored it for the future in case I decide to continue developing it. I organized it into separate pages and restructured the libraries for each page.

**this is a collection of a pages that was a part of a not compleated niglicted project.**

  <!-- technologies was used with links if available -->

## Features

- Create responsive web pages.
  <br>
  Example:

  ```css
  @media (min-width: 992px) {
    ...
    .ASH-flex-row-sp-s.ASH-changable-c-9,
    .ASH-flex-row-ev-s.ASH-changable-c-9,
    .ASH-flex-row-c-s.ASH-changable-c-9 {
      align-items: flex-start;
    }
    ...
  }
  ```

- Use pre-made custom CSS libraries.
  <br>
  Example:

  ```css
  @import url("container.css");
  @import url("list.css");
  @import url("grid.css");
  ```

- Create a drag and drop area to upload a file.
  <br>
  Example:

  ```js
  // click
  dragarea.addEventListener("click", areaclick);
  // drag
  dragarea.addEventListener("dragover", areaddragovr);
  dragarea.addEventListener("dragleave", areaddragout);
  // drop
  dragarea.addEventListener("drop", areadrop);
  ```

- Create a dropdown menu.
  <br>
  Example:

  ```html
  <div class="userpart ASH-flex-row-sp-c">
    <span class="username">ahmed sobhy hamed</span>
    <span class="userimg"><img src="" alt="" /></span>
    <span class="usermenu ASH-list ASH-list-body">
      <i class="ASH-icon">
        <span></span>
        <span></span>
        <span class="funky"></span>
      </i>
      <ul class="ASH-list-ul-drop ASH-separate-li ASH-list-anim">
        <li><a href="">change profile photo</a></li>
        <li><a href="">change user name</a></li>
        <li><a href="">log to another account</a></li>
        <li><a href="">sign out</a></li>
      </ul>
    </span>
  </div>
  ```

- Validate the file type and file size.
  <br>
  Example:

  ```js
  let file = e.dataTransfer.files[0];
  if (isImg(file.type) && file.size <= 1_000_000) {
    let fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (_) => {
      let furl = fr.result;
      rightaction(dragarea, furl);
      fileelement.files[0] = furl;
    };
  } else {
    wrongaction(file, dragarea);
  }
  ```

  <!-- usage or how to interact with this technologies like api end points and what they do -->

## Usage

**You can interact with the project via this link**
[web page on github](https://ahmedsobhyhamed.github.io/HTML_CSS_JS_OLD_NOT-COMPLEATED_PROJECT/).
<br>
In the
[adding image page](https://ahmedsobhyhamed.github.io/HTML_CSS_JS_OLD_NOT-COMPLEATED_PROJECT/addimg_form_HTML-CSS-JS/addimg.html)
You can drag and drop a file in the designated area or simply click on it to open the file browser widget.
<br>
**[see an example for user interaction.[video]](https://youtube.com)**
<br>
**[demonstration video for developer communit](https://www.youtube.com)**

## Technologies Used

- HTML 5.
- Pure CSS.
- Use font awesome CSS library.
- Vanilla JS.

  <!-- about the project and a digram of how it work -->

## Project Structure

- CSS libraries:
  - projectPage_folder/css/container.css
  - projectPage_folder/css/list.css
  - projectPage_folder/css/grid.css
- CSS general rules:
  - projectPage_folder/css/generalroles.css
- CSS custom style:
  - projectPage_folder/css/style.css
- js files:
  - addimg_form_HTML-CSS-JS/js/script.js
- HTML files:
  - projectPage_folder/\*.html
- redirect file:
  - index.html
  (to start the separate pages as a single one as before arranged).
    <!-- licance -->

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details

  <!-- contacts -->

## Contact

Created by [Ahmed Sobhy]:

- email: [ahmed.s.abdulaal@gmail.com](mailto:ahmed.s.abdulaal@gmail.com)
- linkedin: [Ahmed Sobhy](https://www.linkedin.com/in/ahmed-sobhy-b824b7201/)
  <br>
  feel free to contact me!
