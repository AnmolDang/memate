import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function LogoIcon(props) {
  return (
    <Svg
      width={120}
      height={105}
      viewBox="0 0 156 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_117_2330)">
        <Path
          d="M13.735 13.37c.814 1.483 1.74 3.301 2.806 5.47a307.318 307.318 0 013.311 7.048 366.856 366.856 0 013.41 7.748c1.122 2.644 2.189 5.12 3.17 7.455.997-2.322 2.049-4.811 3.171-7.455a312.69 312.69 0 013.41-7.748 257.35 257.35 0 013.31-7.049c1.053-2.168 1.993-4 2.807-5.468h9.568c.45 3.09.87 6.545 1.249 10.377.379 3.832.715 7.804 1.01 11.944.295 4.14.561 8.294.814 12.448.252 4.168.463 8.084.645 11.748H42.174a1326.6 1326.6 0 00-.533-14.77c-.224-5.328-.561-10.698-1.01-16.111-.814 1.874-1.712 3.958-2.708 6.238-.996 2.28-1.964 4.56-2.932 6.853-.968 2.28-1.908 4.461-2.806 6.545-.898 2.084-1.67 3.86-2.301 5.343h-7.338c-.631-1.482-1.403-3.259-2.3-5.343-.899-2.084-1.839-4.265-2.807-6.545-.968-2.28-1.95-4.56-2.932-6.853-.996-2.28-1.894-4.364-2.708-6.238a397.05 397.05 0 00-1.01 16.112 892.368 892.368 0 00-.547 14.783H0a1183.467 1183.467 0 011.46-24.196c.294-4.14.63-8.126 1.01-11.944.378-3.832.799-7.287 1.248-10.377h10.017v-.014zM57.72 42.517c0-3.132.477-5.874 1.445-8.223.968-2.35 2.23-4.308 3.802-5.874a15.754 15.754 0 015.415-3.553 16.917 16.917 0 016.3-1.203c5.023 0 9.007 1.539 11.925 4.602 2.919 3.063 4.378 7.58 4.378 13.524 0 .588-.028 1.217-.07 1.916-.042.7-.085 1.315-.14 1.846H68.017c.224 2.056 1.192 3.693 2.89 4.895 1.712 1.203 3.998 1.819 6.875 1.819 1.838 0 3.647-.168 5.415-.504 1.768-.336 3.227-.755 4.35-1.245l1.346 8.126c-.533.266-1.262.532-2.16.812-.898.265-1.894.503-3.003.699a55.036 55.036 0 01-3.535.503 34.1 34.1 0 01-3.774.196c-3.185 0-5.963-.475-8.32-1.413-2.357-.936-4.307-2.223-5.865-3.86-1.543-1.636-2.694-3.566-3.437-5.804-.716-2.252-1.08-4.671-1.08-7.259zm23.57-3.832a10.64 10.64 0 00-.435-2.49 6.255 6.255 0 00-1.15-2.153 5.911 5.911 0 00-1.95-1.538c-.786-.406-1.768-.602-2.933-.602-1.164 0-2.09.196-2.89.573-.814.378-1.487.882-2.02 1.511a6.98 6.98 0 00-1.249 2.182 14.422 14.422 0 00-.645 2.517H81.29zM13.735 66.517c.814 1.483 1.74 3.301 2.806 5.469a307.302 307.302 0 013.311 7.049 366.64 366.64 0 013.41 7.748c1.122 2.644 2.189 5.12 3.17 7.455.997-2.322 2.049-4.811 3.171-7.455a312.533 312.533 0 013.41-7.748 257.337 257.337 0 013.31-7.049c1.053-2.168 1.993-4 2.807-5.469h9.568c.45 3.091.87 6.546 1.249 10.378.379 3.832.715 7.804 1.01 11.944.295 4.14.561 8.294.814 12.448.252 4.168.463 8.084.645 11.748H42.174c-.14-4.518-.308-9.441-.533-14.77-.224-5.328-.561-10.699-1.01-16.111-.814 1.874-1.712 3.958-2.708 6.238-.996 2.28-1.964 4.559-2.932 6.853-.968 2.28-1.908 4.461-2.806 6.545-.898 2.084-1.67 3.86-2.301 5.343h-7.338c-.631-1.483-1.403-3.259-2.3-5.343-.899-2.084-1.839-4.266-2.807-6.545-.968-2.28-1.95-4.56-2.932-6.853-.996-2.28-1.894-4.364-2.708-6.238a397.05 397.05 0 00-1.01 16.112 892.058 892.058 0 00-.547 14.783H0a1183.016 1183.016 0 011.46-24.196c.294-4.14.63-8.126 1.01-11.944.378-3.832.799-7.287 1.248-10.378h10.017v-.014zM72.128 76.797c2.96 0 5.43.336 7.408 1.007 1.978.671 3.564 1.636 4.742 2.881 1.193 1.259 2.035 2.77 2.526 4.56.49 1.79.743 3.776.743 5.972v20.811c-1.43.308-3.437.685-5.99 1.105-2.554.419-5.654.643-9.288.643-2.287 0-4.364-.196-6.23-.601-1.866-.406-3.465-1.063-4.812-1.986a9.06 9.06 0 01-3.1-3.595c-.716-1.482-1.08-3.286-1.08-5.44 0-2.154.42-3.804 1.248-5.23a9.547 9.547 0 013.339-3.428c1.389-.853 2.988-1.468 4.784-1.846a27.103 27.103 0 015.584-.573c1.305 0 2.455.056 3.466.168 1.01.112 1.823.251 2.455.433v-.937c0-1.706-.52-3.063-1.544-4.098-1.038-1.035-2.834-1.538-5.387-1.538-1.712 0-3.395.126-5.05.364-1.656.251-3.101.587-4.308 1.035l-1.277-8.056c.59-.182 1.32-.364 2.189-.574.87-.21 1.824-.377 2.862-.531a65.28 65.28 0 013.269-.406 46.511 46.511 0 013.451-.14zm.8 29.273c.982 0 1.936-.028 2.834-.07a21.049 21.049 0 002.16-.196v-7.58a18.756 18.756 0 00-1.823-.266 21.915 21.915 0 00-2.217-.14c-.94 0-1.824.056-2.666.168-.827.112-1.557.322-2.188.643a3.782 3.782 0 00-1.487 1.273c-.365.532-.534 1.203-.534 2.014 0 1.567.534 2.657 1.586 3.259 1.052.587 2.497.895 4.335.895zM94.618 68.937l10.032-1.608v10.405h12.052v8.322H104.65v12.42c0 2.097.365 3.776 1.108 5.034.744 1.259 2.231 1.875 4.476 1.875 1.08 0 2.189-.098 3.339-.308a16.217 16.217 0 003.129-.839l1.417 7.79a27.607 27.607 0 01-4.041 1.273c-1.487.363-3.297.531-5.458.531-2.735 0-5.008-.364-6.804-1.105-1.796-.741-3.227-1.762-4.307-3.091-1.08-1.314-1.824-2.923-2.26-4.797-.42-1.874-.644-3.958-.644-6.238V68.937h.013zM120.139 95.664c0-3.133.477-5.874 1.445-8.224.968-2.35 2.231-4.307 3.802-5.874a15.765 15.765 0 015.416-3.552 16.915 16.915 0 016.299-1.203c5.023 0 9.008 1.539 11.926 4.602 2.918 3.063 4.377 7.58 4.377 13.524 0 .587-.028 1.217-.07 1.916-.042.7-.084 1.315-.14 1.846h-22.757c.225 2.056 1.193 3.693 2.89 4.895 1.712 1.203 3.999 1.819 6.875 1.819 1.838 0 3.648-.168 5.416-.504 1.768-.336 3.227-.755 4.349-1.245l1.347 8.126c-.533.266-1.263.532-2.161.811-.898.266-1.894.504-3.002.7a55.808 55.808 0 01-3.536.503c-1.262.14-2.511.196-3.774.196-3.185 0-5.963-.476-8.32-1.413s-4.307-2.223-5.864-3.86c-1.543-1.636-2.694-3.566-3.438-5.804-.715-2.252-1.08-4.671-1.08-7.259zm23.571-3.832a10.667 10.667 0 00-.435-2.49 6.266 6.266 0 00-1.151-2.153 5.905 5.905 0 00-1.95-1.539c-.786-.405-1.768-.601-2.932-.601-1.165 0-2.091.196-2.89.573-.814.378-1.488.882-2.021 1.51a6.968 6.968 0 00-1.248 2.183 14.45 14.45 0 00-.646 2.517h13.273z"
          fill="#fff"
        />
        <Path
          d="M156 22.364v45.314h-37.404V56.35h7.015v4.335h23.374V29.357h-2.918v-6.993H156z"
          fill="#FAF48D"
        />
        <Path
          d="M156 67.678h-37.404V56.35h7.015v4.335h23.374L156 67.678z"
          fill="#D2CC64"
        />
        <Path
          d="M116.056 0L98.757 17.245v33.51h41.698V0h-24.399zm17.37 43.748h-8.531v-2.937c3.564-.615 5.528-2.965 5.528-5.72s-1.487-4.49-5.191-5.79c-2.638-.993-3.718-1.637-3.718-2.658 0-.867.646-1.734 2.666-1.734 2.231 0 3.662.713 4.475 1.049l.898-3.496c-1.024-.49-2.427-.924-4.503-1.021v-2.728h-3.045v2.951c-3.325.658-5.247 2.784-5.247 5.51 0 2.994 2.273 4.546 5.584 5.665 2.301.77 3.297 1.525 3.297 2.7 0 1.174-1.207 1.916-2.974 1.916-2.021 0-3.845-.644-5.149-1.357l-.926 3.622c1.178.686 3.198 1.231 5.275 1.329v2.727h-16.093V17.245h10.284V6.993h17.37v36.755z"
          fill="#EECBFF"
        />
        <Path d="M105.772 24.238v-6.993h-7.015l7.015 6.993z" fill="#C8A0DC" />
      </G>
      <Defs>
        <ClipPath id="clip0_117_2330">
          <Path fill="#fff" d="M0 0H156V114H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LogoIcon;
