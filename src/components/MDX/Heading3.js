import styled from 'styled-components';

const Markup = styled.h2`
  color: var(--secondary);
  font-size: ${({ theme }) => theme.font.size.normal};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-top: ${({ theme }) => theme.space.medium};
`;

export default Markup;
