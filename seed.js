require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Topic = require('./models/Topic');
const Subtopic = require('./models/Subtopic');

connectDB();

const seedData = async () => {
    try {
        // Clear existing data
        await Topic.deleteMany();
        await Subtopic.deleteMany();

        // Define topics and subtopics
        const topics = [
            {
                topicName: 'Algorithms',
                subTopics: [
                    {
                        subTopicId: 'algo_sort_1',
                        title: 'Sorting Algorithms',
                        level: 'Easy',
                        youtubeLink: 'https://youtube.com/sorting',
                        leetcodeLink: 'https://leetcode.com/tag/sorting/',
                        articleLink: 'https://geeksforgeeks.org/sorting-algorithms/',
                    },
                    {
                        subTopicId: 'algo_search_1',
                        title: 'Searching Algorithms',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/searching',
                        leetcodeLink: 'https://leetcode.com/tag/search/',
                        articleLink: 'https://geeksforgeeks.org/binary-search/',
                    },
                    {
                        subTopicId: 'algo_dp_1',
                        title: 'Dynamic Programming',
                        level: 'Hard',
                        youtubeLink: 'https://youtube.com/dp',
                        leetcodeLink: 'https://leetcode.com/tag/dynamic-programming/',
                        articleLink: 'https://geeksforgeeks.org/dynamic-programming/',
                    },
                    {
                        subTopicId: 'algo_graph_1',
                        title: 'Graph Algorithms',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/graph',
                        leetcodeLink: 'https://leetcode.com/tag/graph/',
                        articleLink: 'https://geeksforgeeks.org/graph-data-structure-and-algorithms/',
                    },
                    {
                        subTopicId: 'algo_greedy_1',
                        title: 'Greedy Algorithms',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/greedy',
                        leetcodeLink: 'https://leetcode.com/tag/greedy/',
                        articleLink: 'https://geeksforgeeks.org/greedy-algorithms/',
                    },
                ],
            },
            {
                topicName: 'Data Structures',
                subTopics: [
                    {
                        subTopicId: 'ds_array_1',
                        title: 'Arrays',
                        level: 'Easy',
                        youtubeLink: 'https://youtube.com/array',
                        leetcodeLink: 'https://leetcode.com/tag/array/',
                        articleLink: 'https://geeksforgeeks.org/array-data-structure/',
                    },
                    {
                        subTopicId: 'ds_linkedlist_1',
                        title: 'Linked Lists',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/linkedlist',
                        leetcodeLink: 'https://leetcode.com/tag/linked-list/',
                        articleLink: 'https://geeksforgeeks.org/linked-list-data-structure/',
                    },
                    {
                        subTopicId: 'ds_stack_1',
                        title: 'Stacks',
                        level: 'Easy',
                        youtubeLink: 'https://youtube.com/stack',
                        leetcodeLink: 'https://leetcode.com/tag/stack/',
                        articleLink: 'https://geeksforgeeks.org/stack-data-structure/',
                    },
                    {
                        subTopicId: 'ds_queue_1',
                        title: 'Queues',
                        level: 'Easy',
                        youtubeLink: 'https://youtube.com/queue',
                        leetcodeLink: 'https://leetcode.com/tag/queue/',
                        articleLink: 'https://geeksforgeeks.org/queue-data-structure/',
                    },
                    {
                        subTopicId: 'ds_tree_1',
                        title: 'Trees',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/tree',
                        leetcodeLink: 'https://leetcode.com/tag/tree/',
                        articleLink: 'https://geeksforgeeks.org/tree-data-structure/',
                    },
                    {
                        subTopicId: 'ds_hash_1',
                        title: 'Hash Tables',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/hashtable',
                        leetcodeLink: 'https://leetcode.com/tag/hash-table/',
                        articleLink: 'https://geeksforgeeks.org/hashing-data-structure/',
                    },
                ],
            },
            {
                topicName: 'Mathematics',
                subTopics: [
                    {
                        subTopicId: 'math_number_1',
                        title: 'Number Theory',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/numbertheory',
                        leetcodeLink: 'https://leetcode.com/tag/number-theory/',
                        articleLink: 'https://geeksforgeeks.org/number-theory/',
                    },
                    {
                        subTopicId: 'math_prob_1',
                        title: 'Probability',
                        level: 'Hard',
                        youtubeLink: 'https://youtube.com/probability',
                        leetcodeLink: 'https://leetcode.com/tag/probability/',
                        articleLink: 'https://geeksforgeeks.org/probability/',
                    },
                    {
                        subTopicId: 'math_comb_1',
                        title: 'Combinatorics',
                        level: 'Hard',
                        youtubeLink: 'https://youtube.com/combinatorics',
                        leetcodeLink: 'https://leetcode.com/tag/combinatorics/',
                        articleLink: 'https://geeksforgeeks.org/combinatorics/',
                    },
                    {
                        subTopicId: 'math_linear_1',
                        title: 'Linear Algebra',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/linearalgebra',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/Linear_algebra',
                    },
                    {
                        subTopicId: 'math_matrix_1',
                        title: 'Matrix Operations',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/matrix',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/Matrix_(mathematics)',
                    },
                ],
            },
            {
                topicName: 'Operating Systems',
                subTopics: [
                    {
                        subTopicId: 'os_process_1',
                        title: 'Processes and Threads',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/processes',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/Process_management_(computing)',
                    },
                    {
                        subTopicId: 'os_memory_1',
                        title: 'Memory Management',
                        level: 'Hard',
                        youtubeLink: 'https://youtube.com/memory',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/Memory_management',
                    },
                    {
                        subTopicId: 'os_scheduling_1',
                        title: 'CPU Scheduling',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/scheduling',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/Scheduling_(computing)',
                    },
                    {
                        subTopicId: 'os_deadlock_1',
                        title: 'Deadlocks',
                        level: 'Hard',
                        youtubeLink: 'https://youtube.com/deadlock',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/Deadlock',
                    },
                    {
                        subTopicId: 'os_file_1',
                        title: 'File Systems',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/filesystems',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/File_system',
                    },
                ],
            },
            {
                topicName: 'Computer Networks',
                subTopics: [
                    {
                        subTopicId: 'net_tcpip_1',
                        title: 'TCP/IP Protocol',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/tcpip',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/TCP/IP',
                    },
                    {
                        subTopicId: 'net_routing_1',
                        title: 'Routing Algorithms',
                        level: 'Hard',
                        youtubeLink: 'https://youtube.com/routing',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/Routing',
                    },
                    {
                        subTopicId: 'net_dns_1',
                        title: 'DNS',
                        level: 'Easy',
                        youtubeLink: 'https://youtube.com/dns',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/Domain_Name_System',
                    },
                    {
                        subTopicId: 'net_http_1',
                        title: 'HTTP/HTTPS',
                        level: 'Easy',
                        youtubeLink: 'https://youtube.com/http',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/HTTP',
                    },
                    {
                        subTopicId: 'net_firewall_1',
                        title: 'Firewalls and Security',
                        level: 'Medium',
                        youtubeLink: 'https://youtube.com/firewalls',
                        leetcodeLink: '',
                        articleLink: 'https://en.wikipedia.org/wiki/Firewall_(computing)',
                    },
                ],
            },
        ];

        for (const t of topics) {
            const topic = await Topic.create({ topicName: t.topicName });

            // Attach topicId and create subtopics
            const subTopicsWithTopicId = t.subTopics.map(sub => ({
                ...sub,
                topicId: topic._id,
                status: 'Pending', // default status
            }));

            await Subtopic.insertMany(subTopicsWithTopicId);
        }

        console.log('✅ Seeded 5 topics with subtopics successfully!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Seeding failed:', err);
        process.exit(1);
    }
};

seedData();
