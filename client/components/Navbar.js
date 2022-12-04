import styled from "styled-components";

const Nav = styled.nav`
  background: #0070F3;
  height: 60px;
  width: 100%;
`;

const List = styled.ul`
  float: right;
  margin-right: 20px;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 5px 5px;
`;

const Atag = styled.a`
  color: white;
  font-size: 18px;
  padding: 7px 13px;
  border-radius: 100px;

  &:hover {
    background: #2a81e5;
    transition: .5s;
  }
`;

function Navbar() {
    return (
        <Nav>
            <List>
                <ListItem><Atag className="active" href="/">Home</Atag></ListItem>
                <ListItem><Atag href="/create">Create Post</Atag></ListItem>
                <ListItem><Atag href="/admin">Admin Panel</Atag></ListItem>
            </List>
        </Nav>
    );
}

export default Navbar;