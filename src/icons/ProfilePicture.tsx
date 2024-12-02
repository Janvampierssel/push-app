export default function ProfilePicture({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="16" fill="#E2E8F0" />
      <path
        d="M16 19.1739C20.3386 19.1739 24 19.8789 24 22.599C24 25.32 20.3146 26 16 26C11.6624 26 8 25.295 8 22.575C8 19.8539 11.6854 19.1739 16 19.1739ZM16 6C18.9391 6 21.294 8.35402 21.294 11.2911C21.294 14.2281 18.9391 16.5831 16 16.5831C13.0619 16.5831 10.706 14.2281 10.706 11.2911C10.706 8.35402 13.0619 6 16 6Z"
        fill="#94A3B8"
      />
    </svg>
  );
}
