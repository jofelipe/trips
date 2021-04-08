import * as S from './styles';

interface IMarker {
  title: string;
  lat: number;
  lng: number;
}

const Marker = ({ title }: IMarker) => {
  return (
    <S.Wrapper title={title}>
      <svg
        width={45}
        height={45}
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 0C12.412 0 4.233 8.179 4.233 18.267c0 9.152 11.381 21.194 16.178 25.862a3.064 3.064 0 004.23.047c4.824-4.498 16.127-16.085 16.127-25.91C40.765 8.18 32.587 0 22.5 0zm0 24.203a7.549 7.549 0 01-7.55-7.55 7.55 7.55 0 1115.099 0 7.547 7.547 0 01-7.549 7.55z"
          fill="#ff0000"
        />
      </svg>
    </S.Wrapper>
  );
};

export default Marker;