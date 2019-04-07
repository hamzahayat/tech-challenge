import { schema } from 'normalizr';

const usersSchema = new schema.Entity('users');
const albumsSchema = new schema.Entity('albums');
const photoschema = new schema.Entity('photos');

export { usersSchema, albumsSchema, photoschema };
