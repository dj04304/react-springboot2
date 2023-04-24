import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
`;

const ListPage = () => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
  });

  //   const handleChangeTitle = (e) => {
  //     console.log(e.target.value);
  //     setPost({ title: e.target.value });
  //   };

  //   const handleChangeContent = (e) => {
  //     console.log(e.target.value);
  //     setPost({ content: e.target.value });
  //   };

  const handleForm = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    //computed property names 문법 (키값 동적할당) key값이 동적으로 변할 수 있다. []안에 target.name으로 input의 name값을 매번 들고오는 식으로 key값을 할당한다.
    //앞에 ...post를 넣지 않으면 첫 title내용이 들어오고, 이후에 content내용이 들어오면 덮어써지기 때문에 update를 위해서 ...post를 넣어줘야 한다.
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const postList = () => {
    return [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
      { id: 4, title: '제목4', content: '내용4' },
      { id: 5, title: '제목5', content: '내용5' },
    ];
  };

  const [posts, setPosts] = useState(() => {
    return postList();
  });

  const handleWrite = () => {
    console.log(posts.length);

    let newId = posts.length + 1;

    // ListPage의 setPosts에 id와 title값을 담아야 한다.
    setPosts([...posts, { ...post, id: newId }]);
  };

  return (
    <>
      <h1>리스트 페이지</h1>
      <form>
        <input type="text" placeholder="제목을 입력하세요... " value={post.title} onChange={handleForm} name="title" />
        <input
          type="text"
          placeholder="내용을 입력하세요... "
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => {
        return (
          <StyledItemBoxDiv>
            <div>
              번호: {post.id} / 제목: {post.title} / 내용: {post.content}
            </div>
            <button>삭제</button>
          </StyledItemBoxDiv>
        );
      })}
    </>
  );
};

export default ListPage;
