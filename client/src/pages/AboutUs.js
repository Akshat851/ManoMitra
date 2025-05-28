import { Box, List, ListItem, Typography } from "@mui/material";

export const AboutUs = () => {
  return (
    <Box display="flex" justifyContent="center" pt="20px">
      <Box
        maxWidth="md"
        sx={{
          m: "20px",
          bgcolor: "primary.light",
          p: "20px",
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary.main"
          fontWeight="bold"
          sx={{ mb: "10px" }}
        >
          About Us
        </Typography>
        <Typography fontWeight="bold" fontStyle="italic" align="center">
          ~ You're not alone and you never have to be again.
        </Typography>
        <br />
        <Typography color="primary.main" textAlign="justify">
          In a world where mental health struggles are often hidden behind
          smiles and silence, we’re here to offer something different: a space
          where being real is not just okay, it's encouraged.
        </Typography>
        <br />
        <Typography color="primary.main" textAlign="justify">
          Our platform was born from a simple but powerful idea: everyone
          deserves a safe, supportive environment where they can speak openly,
          find understanding, and access the help they need without fear or
          judgment. Whether you're living with depression, navigating anxiety,
          or just trying to make sense of your emotions, we’re here to walk
          beside you - day or night.
        </Typography>
        <br />
        <Typography fontWeight="bold" color="primary.main">
          What We Offer :
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 3 }}>
          <ListItem sx={{ display: "list-item", p: 1 }}>
            <Typography color="primary.main" textAlign="justify">
              24/7 Support - Because pain doesn’t keep office hours. Our trained
              support representatives are always available, ready to listen,
              comfort, and guide you toward hope.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 1 }}>
            <Typography color="primary.main" textAlign="justify">
              Direct Access to Mental Health Professionals - Connect with
              certified therapists and licensed experts through secure messaging
              or video calls. Compassionate, professional care is now just a few
              clicks away.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 1 }}>
            <Typography color="primary.main" textAlign="justify">
              Peer Support Network - Healing happens in community. Join group
              chats and forums where others share your journey. It’s a space to
              be seen, heard, and supported—without having to explain
              everything.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item", p: 1 }}>
            <Typography color="primary.main" textAlign="justify">
              Privacy First - Your story is yours alone. We uphold the highest
              standards of confidentiality to ensure that you can share, seek,
              and heal with total peace of mind.
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
