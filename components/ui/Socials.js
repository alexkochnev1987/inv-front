import {fetchAPI} from 'lib/api';
import SocialItem from './SocialItem';
import useTranslation from 'next-translate/useTranslation';
import Loading from './Loading';

export default function Socials({variant='black', links}) {
  const variantColor={
    white: 'bg-white fill-black',
    black: 'bg-nero  fill-white',
  };
  if (!links) {
    return <Loading />;
  }

  return (
    <ul className='flex py-1.5'>
      {links.LinkYoutube&&(
        <SocialItem
          name='Youtube'
          link={links.LinkYoutube}
          color={variantColor[variant]}
        >
          <svg
            width='16'
            height='11'
            viewBox='0 0 16 11'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.8406 2.37351C15.8406 2.37351 15.6844 1.2952 15.2031
             0.821716C14.5938 0.198556 13.9125 0.195501 13.6 0.158845C11.3625 -8.43167e-08
              8.00313 0 8.00313 0H7.99687C7.99687 0 4.6375 -8.43167e-08 2.4 0.158845C2.0875
               0.195501 1.40625 0.198556 0.796875 0.821716C0.315625 1.2952 0.1625
               2.37351 0.1625 2.37351C0.1625 2.37351 0 3.64121 0 4.90586V6.09108C0
               7.35573 0.159375 8.62344 0.159375 8.62344C0.159375 8.62344 0.315625
               9.70175 0.79375 10.1752C1.40313 10.7984 2.20313 10.777 2.55938
               10.8442C3.84063 10.9633 8 11 8 11C8 11 11.3625 10.9939 13.6 10.8381C13.9125
               10.8014 14.5938 10.7984 15.2031 10.1752C15.6844 9.70175 15.8406 8.62344
               15.8406 8.62344C15.8406 8.62344 16 7.35879 16 6.09108V4.90586C16 3.64121
               15.8406 2.37351 15.8406 2.37351ZM6.34688 7.52985V3.13413L10.6687
               5.33963L6.34688 7.52985Z'
            />
          </svg>
        </SocialItem>
      )}
      {links.LinkTelegram&&(
        <SocialItem
          name='Telegramm'
          link={links.LinkTelegram}
          color={variantColor[variant]}
        >
          <svg
            width='18'
            height='15'
            viewBox='0 0 18 15'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.06289 9.77088L6.76514 13.9101C7.19114 13.9101 7.37564 13.7292
            7.59689 13.512L9.59414 11.6255L13.7326 14.621C14.4916 15.039 15.0264
            14.8189 15.2311 13.9308L17.9476 1.35014L17.9484 1.3494C18.1891 0.240469
            17.5426 -0.193169 16.8031 0.0788744L0.835634 6.1209C-0.254117 6.53897
            -0.237617 7.1394 0.650384 7.41144L4.73263 8.6664L14.2149 2.80227C14.6611 2.51021
            15.0669 2.67181 14.7331 2.96387L7.06289 9.77088Z'
            />
          </svg>
        </SocialItem>
      )}
      {links.LinkWhatsapp&&(
        <SocialItem
          name='WhatsApp'
          link={links.LinkWhatsapp}
          color={variantColor[variant]}
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.002 0H7.998C3.587 0 0 3.588 0 8C0 9.75 0.564 11.372 1.523
            12.689L0.526 15.661L3.601 14.678C4.866 15.516 6.375 16 8.002 16C12.413 16
            16 12.411 16 8C16 3.589 12.413 0 8.002 0ZM12.657 11.297C12.464 11.842 11.698
            12.294 11.087 12.426C10.669 12.515 10.123 12.586 8.285 11.824C5.934 10.85
            4.42 8.461 4.302 8.306C4.189 8.151 3.352 7.041 3.352 5.893C3.352 4.745 3.935
            4.186 4.17 3.946C4.363 3.749 4.682 3.659 4.988 3.659C5.087 3.659 5.176 3.664
            5.256 3.668C5.491 3.678 5.609 3.692 5.764 4.063C5.957 4.528 6.427 5.676 6.483
            5.794C6.54 5.912 6.597 6.072 6.517 6.227C6.442 6.387 6.376 6.458 6.258
            6.594C6.14 6.73 6.028 6.834 5.91 6.98C5.802 7.107 5.68 7.243 5.816 7.478C5.952
            7.708 6.422 8.475 7.114 9.091C8.007 9.886 8.731 10.14 8.99 10.248C9.183
            10.328 9.413 10.309 9.554 10.159C9.733 9.966 9.954 9.646 10.179 9.331C10.339
            9.105 10.541 9.077 10.753 9.157C10.969 9.232 12.112 9.797 12.347 9.914C12.582
            10.032 12.737 10.088 12.794 10.187C12.85 10.286 12.85 10.751 12.657 11.297Z'
            />
          </svg>
        </SocialItem>
      )}
    </ul>
  );
}
