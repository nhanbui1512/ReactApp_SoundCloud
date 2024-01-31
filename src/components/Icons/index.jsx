export const Logo = ({ width = 50, height = 22, className = {} }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50 22"
    >
      <path
        d="M149.15 27.466c-.206 3.682-3.279 6.546-6.966 6.495H125.44c-.767-.008-1.386-.63-1.39-1.396V14.536c-.024-.633.343-1.216.925-1.468 0 0 1.54-1.068 4.784-1.068 1.982-.002 3.927.532 5.63 1.547 2.686 1.58 4.587 4.214 5.242 7.26.578-.163 1.176-.244 1.776-.242 1.82-.011 3.565.717 4.837 2.019 1.272 1.301 1.96 3.063 1.907 4.882zm-27.19-11.79c.505 6.115.872 11.692 0 17.787-.03.275-.263.484-.54.484-.278 0-.51-.209-.541-.484-.813-6.043-.459-11.725 0-17.787-.023-.207.075-.41.252-.52.176-.11.4-.11.578 0 .176.11.274.313.251.52zm-3.388 17.793c-.042.279-.282.484-.563.484-.282 0-.522-.205-.564-.484-.606-5.214-.606-10.481 0-15.695.031-.29.276-.51.567-.51.291 0 .535.22.567.51.673 5.21.67 10.485-.007 15.695zm-3.395-16.226c.55 5.603.8 10.623-.006 16.213 0 .3-.244.544-.544.544-.3 0-.544-.244-.544-.544-.78-5.518-.518-10.682 0-16.213.03-.28.266-.49.547-.49s.517.21.547.49zm-3.4 16.233c-.032.282-.27.496-.555.496-.284 0-.523-.214-.553-.496-.626-4.865-.626-9.79 0-14.654 0-.311.252-.563.563-.563.311 0 .564.252.564.563.665 4.862.658 9.793-.02 14.654zm-3.396-10.99c.859 3.8.472 7.156-.032 11.029-.041.258-.264.448-.525.448-.26 0-.483-.19-.524-.448-.459-3.82-.839-7.255-.033-11.03 0-.307.25-.557.557-.557.308 0 .557.25.557.558zm-3.388-.577c.787 3.893.531 7.189-.02 11.095-.065.577-1.054.583-1.107 0-.498-3.847-.734-7.242-.02-11.095.032-.293.28-.515.574-.515.295 0 .542.222.573.515zm-3.42 1.887c.825 2.582.543 4.68-.033 7.327-.03.272-.26.478-.534.478s-.504-.206-.535-.478c-.498-2.595-.7-4.738-.045-7.327.03-.293.278-.515.573-.515.295 0 .542.222.573.515z"
        transform="translate(-100 -12)"
        fillRule="evenodd"
        fill="#fff"
      />
    </svg>
  );
};

export const PlayList = ({ width = 18, height = 18, className = {} }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
    >
      <g fill="#333" fillRule="evenodd">
        <path d="M2 6h10v10H2z" />
        <path fillOpacity=".7" d="M5 2h11v10h-2V4H5z" />
      </g>
    </svg>
  );
};

export const AddToPlaylist = (className = {}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
    >
      <title>Group</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="add-to-playlist" fill="rgb(34, 34, 34)">
          <path
            d="M12,3 L12,1 L14,1 L14,3 L16,3 L16,5 L14,5 L14,7 L12,7 L12,5 L10,5 L10,3 L12,3 Z M0,3 L0,5 L8,5 L8,3 L0,3 Z M0,7 L0,9 L10,9 L10,7 L0,7 Z M0,11 L0,13 L10,13 L10,11 L0,11 Z"
            id="Rectangle-20"
          />
        </g>
      </g>
    </svg>
  );
};

export const AddToList = ({ width = 20, height = 20, className = {} }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <path
          fill="rgb(34, 34, 34)"
          fillRule="nonzero"
          d="M4 9h10v2H4V9zm0 4h10v2H4v-2zm0-8h8v2H4V5zm10-4l4 3-4 3V1z"
        />
      </g>
    </svg>
  );
};

export const WaveForm = ({ width = 28, height = 28, className = {} }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <rect x="5" y="12" fill="rgb(34, 34, 34)" width="2" height="4" />
      <rect x="21" y="12" fill="rgb(34, 34, 34)" width="2" height="4" />
      <rect x="17" y="10" fill="rgb(34, 34, 34)" width="2" height="8" />
      <rect x="9" y="8" fill="rgb(34, 34, 34)" width="2" height="12" />
      <rect x="13" y="5" fill="rgb(34, 34, 34)" width="2" height="18" />
    </svg>
  );
};
