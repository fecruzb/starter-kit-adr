import { Box, Container } from "@material-ui/core";

export default ({ children }) => (
  <Box height="100%" paddingY={4}>
    <Container maxWidth={false}>{children}</Container>
  </Box>
);
