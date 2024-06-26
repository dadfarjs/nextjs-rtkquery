'use client';

import { Button, Input } from '@/features/components';
import AddTrack from '@/features/components/Track/AddTrack';
import { FormMusic as FormMusicType } from '@/features/types/music';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

const FormMusic = () => {
  const methods = useForm<FormMusicType>();
  const route = useRouter();

  const handleCreateFormSubmit: SubmitHandler<FormMusicType> = async (data) => {
    // await createTodoMutation.mutate(data);
    await methods.reset();
  };

  const handleRotePage = () => {
    route.push('/musics');
  };
  return (
    <form
      onSubmit={methods.handleSubmit(handleCreateFormSubmit)}
      className='mx-auto flex max-w-lg flex-col items-center space-y-5 p-10'
    >
      <Input placeholder='Title Name' {...methods.register('title')} />
      <Input placeholder='Artist Name' {...methods.register('artist_name')} />
      <Input placeholder='Album Name' {...methods.register('album_name')} />

      <AddTrack />

      <div className='flex flex-row-reverse gap-5'>
        <Button
          type='submit'
          className='rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white'
        >
          Confirm
        </Button>
        <Button
          onClick={handleRotePage}
          className='inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'
        >
          Back
        </Button>
      </div>
    </form>
  );
};

export default FormMusic;
