
import { getLocalSuggestions } from './suggestions.query';

export default {
  addSuggestion: (_, variables, { cache }) => {
    cache.writeData({
      getLocalSuggestions,
      data: { suggestions: variables.suggestions },
    });
  },
};
