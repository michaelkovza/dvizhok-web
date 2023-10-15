export type IconName = 'filters' | 'morning' | 'day' | 'evening' | 'night' | 'plus' | 'search' | 'map' | 'profile'

type Props = {
  name: IconName
}

export function Icon({ name }: Props) {
  switch (name) {
    case 'search': {
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="13.7279"
            cy="13.7279"
            r="10.4867"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.0215 21.5659L25.1328 25.6666"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    case 'map': {
      return (
        <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 12.844C3.02064 6.76889 7.96223 1.86077 14.0373 1.88141C20.1125 1.90205 25.0206 6.84364 24.9999 12.9188V13.0433C24.9252 16.9924 22.7202 20.6424 20.0169 23.4952C18.4709 25.1006 16.7445 26.5219 14.872 27.7307C14.3713 28.1638 13.6286 28.1638 13.1279 27.7307C10.3365 25.9138 7.88655 23.6199 5.89014 20.9538C4.11078 18.629 3.10052 15.8073 3 12.8814L3 12.844Z"
            stroke="#B0B0B5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse
            cx="14.0001"
            cy="13.0557"
            rx="3.52547"
            ry="3.52547"
            stroke="#B0B0B5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    case 'plus': {
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.0004 9.71533V18.2627"
            stroke="#B0B0B5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.2777 13.9891H9.72217"
            stroke="#B0B0B5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.4668 2.3335H8.5335C4.72238 2.3335 2.3335 5.03093 2.3335 8.84951V19.1508C2.3335 22.9694 4.71127 25.6668 8.5335 25.6668H19.4668C23.2891 25.6668 25.6668 22.9694 25.6668 19.1508V8.84951C25.6668 5.03093 23.2891 2.3335 19.4668 2.3335Z"
            stroke="#B0B0B5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    case 'profile': {
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="13.5085"
            cy="8.49087"
            r="5.57437"
            stroke="#B0B0B5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.66652 21.818C4.66503 21.4261 4.75267 21.039 4.92282 20.686C5.45676 19.6181 6.96248 19.0522 8.21191 18.7959C9.11299 18.6036 10.0265 18.4751 10.9457 18.4114C12.6475 18.2619 14.3591 18.2619 16.0609 18.4114C16.98 18.4758 17.8935 18.6043 18.7947 18.7959C20.0441 19.0522 21.5498 19.5647 22.0838 20.686C22.4259 21.4056 22.4259 22.241 22.0838 22.9606C21.5498 24.0819 20.0441 24.5945 18.7947 24.8401C17.8946 25.0404 16.9808 25.1724 16.0609 25.2352C14.6758 25.3527 13.2842 25.3741 11.8961 25.2993C11.5758 25.2993 11.2661 25.2993 10.9457 25.2352C10.0292 25.1732 9.11888 25.0411 8.22259 24.8401C6.96248 24.5945 5.46744 24.0819 4.92282 22.9606C4.75354 22.6035 4.66598 22.2132 4.66652 21.818Z"
            stroke="#B0B0B5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    case 'filters': {
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.8031 20.9841H3.36328"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.6375 20.9845C24.6375 22.8402 23.1332 24.3445 21.2775 24.3445C19.4218 24.3445 17.9175 22.8402 17.9175 20.9845C17.9175 19.1275 19.4218 17.6245 21.2775 17.6245C23.1332 17.6245 24.6375 19.1275 24.6375 20.9845Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.1963 7.3059H24.6375"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.36279 7.3058C3.36279 9.16286 4.86711 10.6658 6.72279 10.6658C8.57848 10.6658 10.0828 9.16286 10.0828 7.3058C10.0828 5.45011 8.57848 3.9458 6.72279 3.9458C4.86711 3.9458 3.36279 5.45011 3.36279 7.3058Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    case 'morning': {
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 2.25V3.75M3.98559 5.48559L2.92493 4.42493M14.0143 5.48559L15.075 4.42493M4.5 11.25C4.5 8.76472 6.51472 6.75 9 6.75C11.4853 6.75 13.5 8.76472 13.5 11.25M16.5 11.25H1.5M14.25 14.25H3.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }

    case 'day': {
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2675_7189)">
            <path
              d="M9 1.5V3M9 15V16.5M3 9H1.5M4.73559 4.73559L3.67493 3.67493M13.2644 4.73559L14.3251 3.67493M4.73559 13.2675L3.67493 14.3282M13.2644 13.2675L14.3251 14.3282M16.5 9H15M12.75 9C12.75 11.0711 11.0711 12.75 9 12.75C6.92893 12.75 5.25 11.0711 5.25 9C5.25 6.92893 6.92893 5.25 9 5.25C11.0711 5.25 12.75 6.92893 12.75 9Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2675_7189">
              <rect width="18" height="18" />
            </clipPath>
          </defs>
        </svg>
      )
    }

    case 'evening': {
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2675_7193)">
            <path
              d="M3 13.5H1.5M4.73559 9.23559L3.67493 8.17493M13.2643 9.23559L14.325 8.17493M16.5 13.5H15M5.25 13.5C5.25 11.4289 6.92893 9.75 9 9.75C11.0711 9.75 12.75 11.4289 12.75 13.5M16.5 16.5H1.5M12 3.75L9 6.75M9 6.75L6 3.75M9 6.75V1.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2675_7193">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    }

    case 'night': {
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2675_7197)">
            <path
              d="M13.5 1.5L13.9633 2.42669C14.1625 2.82492 14.262 3.02404 14.395 3.19659C14.513 3.34969 14.6503 3.48696 14.8034 3.60498C14.976 3.73798 15.1751 3.83754 15.5733 4.03666L16.5 4.5L15.5733 4.96334C15.1751 5.16246 14.976 5.26202 14.8034 5.39502C14.6503 5.51304 14.513 5.65031 14.395 5.80342C14.262 5.97596 14.1625 6.17508 13.9633 6.57331L13.5 7.5L13.0367 6.57331C12.8375 6.17508 12.738 5.97596 12.605 5.80341C12.487 5.65031 12.3497 5.51304 12.1966 5.39502C12.024 5.26202 11.8249 5.16246 11.4267 4.96334L10.5 4.5L11.4267 4.03666C11.8249 3.83754 12.024 3.73798 12.1966 3.60498C12.3497 3.48696 12.487 3.34969 12.605 3.19658C12.738 3.02404 12.8375 2.82492 13.0367 2.42669L13.5 1.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.75 10.042C14.7667 11.7668 12.9109 12.9296 10.7835 12.9296C7.62831 12.9296 5.07056 10.3719 5.07056 7.21675C5.07056 5.08915 6.23362 3.23321 7.95862 2.25C4.33484 2.59359 1.5 5.64519 1.5 9.3589C1.5 13.3028 4.69719 16.5 8.64112 16.5C12.3547 16.5 15.4061 13.6655 15.75 10.042Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2675_7197">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    }
  }
}
