import React from "react";

function ShareIcons({ title }) {
  const quizResultURL = window.location.href;
  const quizTitle = title;

  return (
    <div className="c-share">
      <span>
        <strong>Share on</strong>
      </span>
      <ul className="c-share__list">
        <li className="c-share__list-item">
          <a
            href={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(
              quizTitle
            )}&url=${quizResultURL}`}
            aria-label="Twitter"
            target="_blank"
          >
            <svg
              focusable="false"
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"
              ></path>
            </svg>
          </a>
        </li>

        <li className="c-share__list-item">
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${quizResultURL}`}
            aria-label="Facebook"
            target="_blank"
          >
            <svg
              focusable="false"
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ShareIcons;
