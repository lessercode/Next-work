'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getWebsiteCategory, type FormState } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';
import { SubmitButton } from '../submit-button';

const initialState: FormState = {
  message: '',
};

export function CategorizeWebsiteDialog() {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useFormState(getWebsiteCategory, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'Validation failed.' && state.error) {
      toast({
        title: 'Invalid URL',
        description: state.error,
        variant: 'destructive',
      });
    } else if (state.message === 'AI request failed.' && state.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    } else if (state.message === 'Success') {
      formRef.current?.reset();
    }
  }, [state, toast]);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      formRef.current?.reset();
      // Reset form state when closing
      getWebsiteCategory(initialState, new FormData());
    }
    setOpen(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Wand2 className="mr-2 h-4 w-4" />
          Categorize Website
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>AI Website Categorizer</DialogTitle>
          <DialogDescription>
            Enter a website URL and our AI will suggest a category for it.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="grid gap-4 py-4">
          <Input
            id="url"
            name="url"
            placeholder="https://example.com"
            required
            type="url"
          />
          <SubmitButton />
        </form>
        {state.category && (
          <div className="rounded-lg border bg-accent/50 p-4 text-center">
            <p className="text-sm text-muted-foreground">Suggested Category</p>
            <p className="text-lg font-semibold text-accent-foreground">
              {state.category}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
