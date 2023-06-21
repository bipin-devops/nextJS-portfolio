import PageDescription from "@/components/PageDescription";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function ContactPage() {
  const [error, setError] = useState(false);
  return (
    <>
      <section>
        <PageDescription
          title="Contact"
          description="Please use the form below to get in touch with me"
        />
      </section>
      <form
        id="project-form"
        // onSubmit={handleSubmit}
        style={{ padding: "24px" }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <Button
          variant="contained"
          type="submit"
          form="project-form"
          fullWidth
          //   onClick={onSubmit}
        >
          Send
        </Button>
      </form>
    </>
  );
}
