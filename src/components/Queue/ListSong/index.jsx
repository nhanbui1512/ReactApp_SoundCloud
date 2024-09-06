import React, { memo } from 'react';
import PlaylistItem from '../Item';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const ListSong = memo(({ items }) => {
  return (
    <SortableContext items={items.map((c) => c.id)} strategy={verticalListSortingStrategy}>
      <div className="col">
        {items.map((song, index) => {
          return <PlaylistItem data={song} key={index} />;
        })}
      </div>
    </SortableContext>
  );
});

export default ListSong;
