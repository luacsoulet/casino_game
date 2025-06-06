'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import GameCard from "@/components/GameCard";
import { HeroSection } from "@/components/HeroSection";
import { getGames } from '@/utils/apiFonctions';
import { Game } from '@/utils/types';
import { useCache } from '@/hooks/useCache';

export default function Home() {
  const { data: cachedGames, etag, updateCache } = useCache<Game[]>('games');
  const [games, setGames] = useState<Game[]>(cachedGames || []);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(!cachedGames);
  const hasFetchedRef = useRef(false);

  const fetchGames = useCallback(async () => {

    if (cachedGames && !hasFetchedRef.current) {
      setGames(cachedGames);
      setIsLoading(false);
      hasFetchedRef.current = true;
      return;
    }

    try {
      const response = await getGames(etag);

      if (response.notModified && cachedGames) {
        setGames(cachedGames);
        return;
      }
      if (!response.notModified && response.data) {
        updateCache(response.data, response.etag || '');
        setGames(response.data);
      }
    } catch (error) {
      setIsError(true);
      console.error('Erreur lors de la récupération des jeux:', error);
    } finally {
      setIsLoading(false);
      hasFetchedRef.current = true;
    }
  }, [cachedGames, etag, updateCache]);

  useEffect(() => {
    if (!hasFetchedRef.current) {
      fetchGames();
    }
  }, [fetchGames]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#64ffda] text-xl">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section id="games" className="py-20 px-4 bg-[#020c1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#64ffda] text-center mb-12">
            Nos Jeux
          </h2>
          {isError && (
            <div className="text-red-500 text-center mb-4">
              Une erreur est survenue lors de la récupération des jeux.
            </div>
          )}
          <div className="flex items-center justify-center gap-8 flex-wrap max-w-7xl mx-auto">
            {games.map((game) => (
              <GameCard key={game.id} {...game} imageUrl="/coinflip.gif" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
