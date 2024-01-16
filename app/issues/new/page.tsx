'use client';

// import React from 'react'
import React, { useState } from "react";
import {TextField, Button, Callout, Text} from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import {useForm, Controller} from 'react-hook-form';
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {createIssueSchema} from '@/app/validationSchemas';
import {z} from 'zod';


type IssueForm = z.infer<typeof createIssueSchema>;

// interface IssueForm{
//     title: string;
//     description: string;
// }

const NewIssuePage = () => {
    const router = useRouter();
    const {register,  control, handleSubmit, formState: {errors},} = useForm<IssueForm>({
      resolver: zodResolver(createIssueSchema),
    });
    const [error, setError] = useState('');

  return (
    <div className="max-w-xl space-y-3">
      {error && (
        <Callout.Root color="red" className = "mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
            setError("");
          } catch (error) {
            // console.log(error);
            setError("An unexpected error occurred.");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        {errors.title && <Text color='red' as='p'>{errors.title.message}</Text>}
        {/* <TextArea placeholder="Description" /> */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && <Text color='red' as='p'>{errors.description.message}</Text>}
        <Button type="submit">Submit New Issue</Button>
      </form>
    </div>
  );
}

export default NewIssuePage