import { Box, Container } from "@material-ui/core";

export default ({ children }) => (
  <Box height="100%" bgcolor="grey.100" py={4}>
    <Container maxWidth={false}>{children}</Container>
  </Box>
);
