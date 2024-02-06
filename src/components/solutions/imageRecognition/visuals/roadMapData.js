import { createSchema } from 'beautiful-react-diagrams';

export const roadMapDataNew = createSchema({
    nodes: [
        // { id: 'node-1', content: 'Data Source', coordinates: [100, 300], },
        { id: 'node-2', content: 'Clarify Requirements', coordinates: [250, 200], },
        { id: 'node-3', content: 'Create PoC', coordinates: [400, 100], },
        { id: 'node-4', content: 'Develop a Prototype', coordinates: [550, 200], },
        { id: 'node-5', content: 'Production and Implementation', coordinates: [700, 300], },
        { id: 'node-6', content: 'Support & Maintenance', coordinates: [850, 200], },
        { id: 'node-7', content: 'Customer Feedback', coordinates: [1000, 100], },
        // { id: 'node-8', content: 'Model Validation', coordinates: [1150, 200], },
        // { id: 'node-9', content: 'Results Interpretation', coordinates: [1300, 300], },
    ],
    links: [
        // { input: 'node-1', output: 'node-2' },
        { input: 'node-2', output: 'node-3' },
        { input: 'node-3', output: 'node-4' },
        { input: 'node-4', output: 'node-5' },
        { input: 'node-5', output: 'node-6' },
        { input: 'node-6', output: 'node-7' },
        // { input: 'node-7', output: 'node-8' },
        // { input: 'node-8', output: 'node-9' },
    ]
});
export const roadMapDataExisting = createSchema({
    nodes: [
        // { id: 'node-1', content: 'Data Source', coordinates: [100, 300], },
        { id: 'node-2', content: 'Clarify Requirements', coordinates: [250, 200], },
        { id: 'node-3', content: 'Analyze the Existing App', coordinates: [400, 100], },
        { id: 'node-4', content: 'Develop an Optimal Solution', coordinates: [550, 200], },
        { id: 'node-5', content: 'Production and Implementation', coordinates: [700, 300], },
        { id: 'node-6', content: 'Support & Maintenance', coordinates: [850, 200], },
        { id: 'node-7', content: 'Customer Feedback', coordinates: [1000, 100], },
        // { id: 'node-8', content: 'Model Validation', coordinates: [1150, 200], },
        // { id: 'node-9', content: 'Results Interpretation', coordinates: [1300, 300], },
    ],
    links: [
        // { input: 'node-1', output: 'node-2' },
        { input: 'node-2', output: 'node-3' },
        { input: 'node-3', output: 'node-4' },
        { input: 'node-4', output: 'node-5' },
        { input: 'node-5', output: 'node-6' },
        { input: 'node-6', output: 'node-7' },
        // { input: 'node-7', output: 'node-8' },
        // { input: 'node-8', output: 'node-9' },
    ]
});
