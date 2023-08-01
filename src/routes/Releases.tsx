import { Box, SimpleGrid } from '@chakra-ui/react';
import { PageHead } from '../components/PageHead';
import { SectionHead } from '../components/SectionHead';
import { AlbumCard } from '../components/AlbumCard';
import albums from '../data/items.json';

export function Releases() {
  return (
    <Box>
      <PageHead pageHeading='Releases' />
      <SectionHead sectionTitle='Vinyl'>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {albums.map((item) => (
          <AlbumCard
            key={item.id}
            title={item.title}
            band={item.band}
            format={item.format}
            year={item.year}
            displayPrice={item.display_price}
            image={item.imgUrl}
          />
        ))}
        </SimpleGrid>
        </SectionHead>
    </Box>
  );
}
