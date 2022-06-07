import { Player } from '@statsify/schemas';
import { HistoricalService } from '../../src/historical';
import { MockClass } from './mock.type';

export const historicalService: MockClass<HistoricalService> = {
  resetPlayers: jest.fn(),
  findAndReset: jest.fn().mockResolvedValue(new Player()),
  resetPlayer: jest.fn().mockResolvedValue(new Player()),
  findOneAndMerge: jest.fn().mockResolvedValue(new Player()),
};
