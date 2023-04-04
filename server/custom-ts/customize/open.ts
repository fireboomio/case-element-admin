import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLID, GraphQLBoolean, GraphQLNonNull
} from 'graphql';
import {prisma} from 'generated/prisma'
import fetch from "@web-std/fetch";
import * as querystring from "querystring";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      GetAllApis: {
        args: {},
        type:
          new GraphQLList(new GraphQLObjectType({
            name: 'GetAllApis',
            fields: {
              content: {
                type: GraphQLString
              },
              createTime: {
                type: GraphQLString
              },
              deleteTime: {
                type: GraphQLString
              },
              enabled: {
                type: GraphQLBoolean
              },
              id: {
                type: GraphQLID
              },
              illegal: {
                type: GraphQLBoolean
              },
              isPublic: {
                type: GraphQLBoolean
              },
              liveQuery: {
                type: GraphQLBoolean
              },
              method: {
                type: GraphQLString
              },
              operationType: {
                type: GraphQLString
              },
              remark: {
                type: GraphQLString
              },
              restUrl: {
                type: GraphQLString
              },
              roleType: {
                type: GraphQLString
              },
              roles: {
                type: GraphQLString
              },
              title: {
                type: GraphQLString
              },
              updateTime: {
                type: GraphQLString
              }
            }
          })),
        resolve() {
          return fetch('http://localhost:9123/api/v1/operateApi/opened', {
            method: 'GET'
          }).then(resp => resp.json())
        },
      },
      GetRoleBindApis: {
        // parameters
        args: {
          code: {
            // required
            type: new GraphQLNonNull(GraphQLString)
          },
          roleType: {
            // required
            type: GraphQLString
          },
        },
        // response
        type: new GraphQLList(new GraphQLObjectType({
          fields: {
            id: {
              type: GraphQLID,
            },
            content: {
              type: GraphQLString
            },
            createTime: {
              type: GraphQLString
            },
            deleteTime: {
              type: GraphQLString
            },
            enabled: {
              type: GraphQLBoolean
            },
            illegal: {
              type: GraphQLBoolean
            },
            isPublic: {
              type: GraphQLBoolean
            },
            liveQuery: {
              type: GraphQLBoolean
            },
            method: {
              type: GraphQLString
            },
            operationType: {
              type: GraphQLString
            },
            remark: {
              type: GraphQLString
            },
            restUrl: {
              type: GraphQLString
            },
            roleType: {
              type: GraphQLString
            },
            roles: {
              type: GraphQLString
            },
            title: {
              type: GraphQLString
            },
            updateTime: {
              type: GraphQLString
            }

          },
          name: 'GetRoleBindApis'
        })),
        resolve(source, args) {
          console.log('http://localhost:9123/api/v1/role/apis?' + querystring.stringify(args))
          return fetch('http://localhost:9123/api/v1/role/apis?' + querystring.stringify(args), {
            "method": "GET"
          }).then(async resp => resp.json())
        },
      },
      GetAllRoles: {
        args: {},
        // response
        type:
          new GraphQLList(new GraphQLObjectType({
            name: 'GetAllRoles',
            fields: {
              code: {
                type: GraphQLString
              },
              remark: {
                type: GraphQLString
              }
            }
          })),
        resolve() {
          return fetch('http://localhost:9123/api/v1/role/all', {
            "method": "GET"
          }).then(resp => resp.json())
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      BindRoleApis: {
        args: {
          roleType: {
            type: GraphQLString,
          },
          roleCode: {type: new GraphQLNonNull(GraphQLString)},
          apis: {type: new GraphQLNonNull(new GraphQLList(GraphQLInt))},
          allRoles: {type: new GraphQLNonNull(new GraphQLList(GraphQLString))},
        },
        // response
        type:
          new GraphQLObjectType({
            name: 'BindRoleApis',
            fields: {
              count: {
                type: GraphQLInt
              }
            }
          }),
        resolve(source, args) {
          return fetch('http://localhost:9123/api/v1/role/bindApi', {
            "method": "POST",
            body: JSON.stringify(args),
            "headers": {
              "content-type": "application/json",
            }
          }).then(resp => resp.json())
        },
      },
    },
  }),
})
