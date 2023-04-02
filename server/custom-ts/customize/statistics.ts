import {GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } from 'graphql';
import { prisma } from 'generated/prisma'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      GetVisitTrending: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'GetVisitTrending',
                fields: {
                    days: {
                        type: GraphQLString,
                    },
                    count: {
                        type: GraphQLInt
                    }
                },
            })),
            resolve() {
                return prisma.main.queryRaw(`SELECT DATE_FORMAT(visitedAt,'%Y%m%d') days, COUNT(id) count from VisitLog where visitedAt BETWEEN '2020-01-01' AND '2020-12-31' GROUP BY days`, {});
            },
        },
        GetMonthlySales: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'GetMonthlySales',
                fields: {
                    months: {
                        type: GraphQLString,
                    },
                    totalSales: {
                        type: GraphQLFloat
                    }
                },
            })),
            resolve() {
                return prisma.main.queryRaw(`SELECT DATE_FORMAT(day,'%Y%m') months, SUM(sales) totalSales from SaleLog where day BETWEEN '2019-10-01' AND '2020-09-30' GROUP BY months`, {});
            },
        },
        GetSalesTop10: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'GetSalesTop10',
                fields: {
                    shopName: {
                        type: GraphQLString,
                    },
                    totalSales: {
                        type: GraphQLFloat
                    }
                },
            })),
            resolve() {
                return prisma.main.queryRaw(`SELECT shopName, SUM(sales) totalSales from SaleLog GROUP BY shopName ORDER BY totalSales DESC`, {});
            },
        },
        GetSaleTypePercent: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'GetSaleTypePercent',
                fields: {
                    typeId: {
                        type: GraphQLInt
                    },
                    typeName: {
                        type: GraphQLString,
                    },
                    totalSales: {
                        type: GraphQLFloat
                    }
                },
            })),
            resolve() {
                return prisma.main.queryRaw(`SELECT SaleType.id typeId, SaleType.name typeName,SUM(sales) totalSales from SaleLog, SaleType WHERE SaleLog.typeId = SaleType.id GROUP BY SaleLog.typeId ORDER BY totalSales DESC`, {});
            },
        },
    },
  }),
})