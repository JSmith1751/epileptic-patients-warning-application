import { graphql, useStaticQuery } from 'gatsby'

export default function CollectAllUsers() {
	const query = useStaticQuery(graphql`
{
		allMysqlSysuser {
			edges {
				node {
					username
					pass
					authlevel
					firstname
					authlevel
					lastname
					DOB
					gender
					address
					postcode
					yearsSuffered
					seizureTypes
					epilepticTriggers
					occuranceFrequency
					mentalReport
					mediaRecommended
				}
			}
		}
}
`)
	return query.allMysqlSysuser.edges.map(x=>x)
}