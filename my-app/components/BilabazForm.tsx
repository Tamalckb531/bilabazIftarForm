"use client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { insertUser } from "@/actions/form";
const formSchema = z.object({
  name: z.string(),
  address: z.string(),
  gender: z.string(),
});

const BilabazForm = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      gender: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await insertUser(values.name, values.address, values.gender);
      // Show success message (optional)
    } catch (error) {
      console.error("Error creating user:", error);
      // Show error message to the user (optional)
    }
    router.push(`/list/`); // (optional) Still log the values for your reference
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 min-w-full flex flex-col items-center"
        >
          {/* Name Input */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name :</FormLabel>
                <FormControl>
                  <Input placeholder="bilabaz xyz" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Address Input  */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your address :</FormLabel>
                <FormControl>
                  <Input placeholder="Charukola pottoli " {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Gender :</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="Select Your Gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="nonBinary">Non Binary</SelectItem>
                    <SelectItem value="polythene">Polythene</SelectItem>
                    <SelectItem value="batman">Batman</SelectItem>
                    <SelectItem value="zuhear">Zuhear</SelectItem>
                    <SelectItem value="rohinga">Rohinga</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default BilabazForm;

/*
 
 const router = useRouter();
 onClick={() => {
          router.push(`/form/`); // Use router.push for client-side navigation
        }}*/
