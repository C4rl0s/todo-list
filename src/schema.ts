import { makeSchema, queryType } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.string("name", {resolve: () => 'Avendano'});
  },
});

const types = { Query };

export const schema = makeSchema({
  types,
});
