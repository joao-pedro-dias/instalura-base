import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const TextStyleVariantsMap ={
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,

  smallestException: css`
      font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
}

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
`;

export function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
};