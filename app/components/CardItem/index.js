/**
 *
 * CardItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const CardStyled = styled(Card)`
  margin-bottom: 20px !important;
`;

function CardItem({ image, title, text, age }) {
  return (
    <CardStyled
      cover={<img alt="example" src={image} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={image} />}
        title={title}
        description={
          <>
            <p>Age: {age}</p>
            <p>Address: {text}</p>
          </>
        }
      />
    </CardStyled>
  );
}

CardItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default CardItem;
