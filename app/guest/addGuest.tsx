"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useGuests } from "../contexts/GuestsContext";

export default function AddGuestForm() {
  const { addGuest } = useGuests();
  const [form, setForm] = useState({
    bookingId: "",
    name: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const success = await addGuest(form);

      if (success) {
        setMessage("Guest added successfully!");
        setForm({ bookingId: "", name: "", email: "", phone: "" });
      } else {
        setMessage("Error adding guest.");
      }
    } catch (error) {
      setMessage("Error adding guest.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add a Guest
      </Typography>
      <TextField
        name="bookingId"
        label="Booking ID"
        value={form.bookingId}
        onChange={handleChange}
        required
      />
      <TextField
        name="name"
        label="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <TextField
        name="email"
        type="email"
        label="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <TextField
        name="phone"
        type="tel"
        label="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding..." : "Submit"}
      </Button>

      {message && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
}
