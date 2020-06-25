import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import defaultUser from '../../../assets/images/default_user.jpg';
import api from '../../../services/api';
import { Container } from './styles';
import * as userActions from '../../../store/modules/user/actions';

function AvatarInput() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [preview, setPreview] = useState(
    profile.avatar ? profile.avatar.url : defaultUser
  );

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.currentTarget.files[0]);
    const response = await api.post('files', data);
    dispatch(userActions.fileSuccess(response.data));
  }

  useEffect(() => {
    console.log(profile);
    if (profile.avatar) {
      setPreview(profile.avatar.url);
    }
  }, [profile]);

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview} alt="" />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

export default AvatarInput;
