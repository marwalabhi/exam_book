const exam = {
    "id": 1302,
    "name": "RSCIT",
    "access_code": null,
    "user_id": 1053,
    "org_id": 23,
    "status": "published",
    "points": "0.0",
    "rubric_id": 20,
    "children_order": [
        41375
    ],
    "settings": {
        "mode": "online_secure",
        "i_code": "97134C",
        "duration": "30",
        "is_timed": true,
        "attempts_no": 1,
        "allow_guests": true,
        "with_join_code": false,
        "assessment_type": "exam",
        "evaluation_type": "formative",
        "grading_setting": "overall",
        "start_condition": "scheduled_time",
        "reviewer_setting": {
            "reviewer_per_student": 0,
            "close_review_at_datetime": null,
            "assign_reviewers_at_datetime": null,
            "assign_reviewers_per_student": 0
        },
        "start_at_datetime": "2024-11-15T12:45:11.300Z",
        "allow_unmapped_students": true,
        "map_classes_or_students": "students"
    },
    "archived": false,
    "created_at": "2024-11-15T12:52:13.838Z",
    "updated_at": "2024-12-17T06:09:12.166Z",
    "custom_fields": {
        "grade_item_label": "Grade 11",
        "subject_item_label": "Visual Arts",
        "segment_types_count": {
            "section": 1,
            "mcq_single": 10
        },
        "org_programme_item_label": "IB Diploma",
        "subject_item_label_group": "Arts"
    },
    "export_json": null,
    "original_id": null,
    "dup_from_id": null,
    "master_editable": true,
    "submissions_count": 0,
    "attachments_json": {},
    "programme_id": null,
    "marked_submissions_count": 0,
    "parent_id": null,
    "experience_type": "assessment",
    "position": "0J",
    "deleted_at": null,
    "topics": [
        {
            "segment": {
                "id": 41375,
                "segment_type": "section",
                "experience_id": 1302,
                "user_id": 1053,
                "parent_id": 1302,
                "parent_type": "experience",
                "title": "title",
                "children_order": [
                    41733,
                    41732,
                    41731,
                    41730,
                    41729,
                    41376,
                    41377,
                    41378,
                    41379,
                    41734
                ],
                "points": "0.0",
                "position": "0J",
                "settings": {},
                "custom_fields": "{}",
                "archived": false,
                "created_at": "2024-11-15T12:52:13.849Z",
                "updated_at": "2024-11-15T12:52:13.849Z",
                "master_editable": true,
                "has_own_child": true,
                "segment_type_id": 1153,
                "nested_children": [],
                "descendants": [],
                "section_segment_attributes": {
                    "id": 1153,
                    "title": "Section 1",
                    "points": null,
                    "segment_id": 41375,
                    "created_at": "2024-11-15T12:52:13.854Z",
                    "updated_at": "2024-11-15T12:52:13.854Z",
                    "uuid": "01JCQY35WYGA8WT25WJQ5GZPV2"
                },
                "text_segment_attributes": null,
                "resource_segment_attributes": null,
                "question_segment_attributes": null,
                "questionbank_id": null,
                "relation_items": [
                    {
                        "questionbank_id": null,
                        "programme_id": null,
                        "org_programme_id": null,
                        "subject_id": null,
                        "grade_id": null,
                        "questionbank_items": [],
                        "org_programme_items": [],
                        "subject_items": [],
                        "grade_items": [],
                        "tag_items": [],
                        "syllabus_items": [],
                        "difficulty_level_items": [],
                        "teaching_level_items": [],
                        "command_term_items": [],
                        "depth_of_knowledge_items": [],
                        "assessment_objective_items": [],
                        "syllabus_content_ids": null,
                        "difficulty_level_tag_ids": null,
                        "teaching_level_tag_ids": null,
                        "command_term_tag_ids": null,
                        "depth_of_knowledge_tag_ids": null,
                        "assessment_objective_tag_ids": null
                    }
                ],
                "rubric": null,
                "criterium_associations_attributes": [],
                "uuid": null,
                "tag_labels": [],
                "user_response": [],
                "experience_data": {}
            },
            "children": [
                {
                    "id": 41733,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "0V",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-12-17T05:56:51.180Z",
                    "updated_at": "2024-12-17T05:56:51.180Z",
                    "master_editable": true,
                    "has_own_child": true,
                    "segment_type_id": 22207,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22207,
                        "content": "<p>are the processes managed by search engines?</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "xBPmqwbWbtBvRu3g",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "sgPtUuHJ5BF8Jjoc",
                                        "checked": false,
                                        "content": "<p>Mail merge, compose and draft</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "Tfk1HzRYQiMvQuBO",
                                        "checked": false,
                                        "content": "<p>Star, bus and mesh</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "260KYqKXJLDiXv8f",
                                        "checked": false,
                                        "content": "<p>Mini, Micro and Mainframe</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "1ibaKED0W25T3A3b",
                                        "checked": false,
                                        "content": "<p>Web crawling, indexing and searching</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41733,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-12-17T05:57:06.635Z",
                        "updated_at": "2024-12-17T05:57:06.635Z",
                        "custom_fields": "{}",
                        "uuid": "01JF9K22EBQGJGK0DNZ0GH4KDK",
                        "attachments_json": {},
                        "markscheme": ""
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                },
                {
                    "id": 41734,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "0k",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-12-17T05:56:58.977Z",
                    "updated_at": "2024-12-17T05:56:58.977Z",
                    "master_editable": true,
                    "has_own_child": false,
                    "segment_type_id": 22206,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22206,
                        "content": "<p>You can access social media from computer using:</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "rYwIeDzmr6EPa4YV",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "EtCoxhKd9Ywyy0w9",
                                        "checked": false,
                                        "content": "<p>Docs, Excel, PPT etc</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "6gpC0zciuHVgyAI9",
                                        "checked": false,
                                        "content": "<p>YouTube, Google Play, Outlook etc</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "P2vruPM7iFMtIIh9",
                                        "checked": false,
                                        "content": "<p>Facebook, Instagram, Twitter etc</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "x3U1IR7IUIwRSfI9",
                                        "checked": false,
                                        "content": "<p>SSO, PRSY, LPG etc</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41734,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-12-17T05:56:51.184Z",
                        "updated_at": "2024-12-17T05:56:51.184Z",
                        "custom_fields": "{}",
                        "uuid": "01JF9K1KBG4267YRSBJ106J2CS",
                        "attachments_json": {},
                        "markscheme": ""
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                },
                {
                    "id": 41732,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "1",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-12-17T05:55:48.941Z",
                    "updated_at": "2024-12-17T05:55:48.941Z",
                    "master_editable": true,
                    "has_own_child": true,
                    "segment_type_id": 22205,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22205,
                        "content": "<p>Choose the most appropriate option regarding toggle keys :</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "Grdc7cofwykwuG5K",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "Cy32XsQzb97ZgNtp",
                                        "checked": false,
                                        "content": "<p>Caps Lock</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "ZKz91WOBQlZEvA1U",
                                        "checked": false,
                                        "content": "<p>Num Lock</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "o9NzfDnhypSDOAtR",
                                        "checked": false,
                                        "content": "<p>Scroll Lock key</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "IpKnRH5bU4P7vgoF",
                                        "checked": false,
                                        "content": "<p>All of these</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41732,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-12-17T05:55:48.946Z",
                        "updated_at": "2024-12-17T05:55:48.946Z",
                        "custom_fields": "{}",
                        "uuid": "01JF9JZPJJGVY5ZXYX0A16RS3M",
                        "attachments_json": {},
                        "markscheme": ""
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                },
                {
                    "id": 41731,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "3",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-12-17T05:54:45.833Z",
                    "updated_at": "2024-12-17T05:54:45.833Z",
                    "master_editable": true,
                    "has_own_child": true,
                    "segment_type_id": 22204,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22204,
                        "content": "<p>To start a slide show of a presentation:</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "gs0nIpE6RnFWTwUw",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "HmJRRZDwpmiOOVsX",
                                        "checked": false,
                                        "content": "<p>Press the F5 key</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "JznKdjPumPo6g4W1",
                                        "checked": false,
                                        "content": "<p>Choose the View Show option from the Slide Show menu</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "Y7MbkRpBm5TDK48A",
                                        "checked": false,
                                        "content": "<p>Select Rehearsal Timing from the Slide Show menu</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "qGAdqoQx385YF3ZN",
                                        "checked": false,
                                        "content": "<p>Either option (A) or option (B)</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41731,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-12-17T05:54:45.838Z",
                        "updated_at": "2024-12-17T05:54:45.838Z",
                        "custom_fields": "{}",
                        "uuid": "01JF9JXRYERAC3FFD6S7E5TKEJ",
                        "attachments_json": {},
                        "markscheme": ""
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                },
                {
                    "id": 41730,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "7",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-12-17T05:53:22.284Z",
                    "updated_at": "2024-12-17T05:53:22.284Z",
                    "master_editable": true,
                    "has_own_child": true,
                    "segment_type_id": 22203,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22203,
                        "content": "<p>What is the full form of UPI?</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "XWKGxlrv5qmXjmqE",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "ztd76OcI9UjsGtjz",
                                        "checked": false,
                                        "content": "<p>Universal Payment Interface</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "AklUITKUmQCYJQD4",
                                        "checked": false,
                                        "content": "<p>Ultra Payment Input</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "6zihPa8iCcGOYQM1",
                                        "checked": false,
                                        "content": "<p>Unified Payment Interface</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "rugY1BNjOiZcuSfh",
                                        "checked": false,
                                        "content": "<p>Unstructured Payment Invoice</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41730,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-12-17T05:53:22.288Z",
                        "updated_at": "2024-12-17T05:53:22.288Z",
                        "custom_fields": "{}",
                        "uuid": "01JF9JV7BG0AK8M0DSB8MMMX6W",
                        "attachments_json": {},
                        "markscheme": ""
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                },
                {
                    "id": 41729,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "F",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-12-17T05:52:28.495Z",
                    "updated_at": "2024-12-17T05:52:28.495Z",
                    "master_editable": true,
                    "has_own_child": true,
                    "segment_type_id": 22202,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22202,
                        "content": "<p>Which of the following is an example of an input device?</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "zEt6vWJcmlbjOgBZ",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "SgcSiP3QT7nwQxTJ",
                                        "checked": false,
                                        "content": "<p>OCR</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "nelXCQrA8FbaXMjS",
                                        "checked": false,
                                        "content": "<p>Line printer</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "F23f6pQ2MaX6yc0Z",
                                        "checked": false,
                                        "content": "<p>CRT monitor</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "tu5NQjdLlXmpKOjk",
                                        "checked": false,
                                        "content": "<p>Speaker</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41729,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-12-17T05:52:28.529Z",
                        "updated_at": "2024-12-17T05:52:28.529Z",
                        "custom_fields": "{}",
                        "uuid": "01JF9JSJVH0223K7Y2TXP6NEC7",
                        "attachments_json": {},
                        "markscheme": ""
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                },
                {
                    "id": 41376,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "U",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-11-15T12:54:14.704Z",
                    "updated_at": "2024-11-15T12:54:14.704Z",
                    "master_editable": true,
                    "has_own_child": true,
                    "segment_type_id": 22107,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22107,
                        "content": "<p>Addition of 2 + 2 ?</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "pSiaYEc0cetIPwFt",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "Xs4AxoXrJB049rVl",
                                        "checked": false,
                                        "content": "<p>1</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "rwOFn6LvfaMbUTdK",
                                        "checked": false,
                                        "content": "<p>2</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "S3iGVD0jHnXJHZ67",
                                        "checked": false,
                                        "content": "<p>3</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "nOmnQo3VfBuNRrai",
                                        "checked": false,
                                        "content": "<p>4</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41376,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-11-15T12:54:14.722Z",
                        "updated_at": "2024-11-15T12:54:14.722Z",
                        "custom_fields": "{}",
                        "uuid": "01JCQY6VY2CHB0PBTKKJ5W1QEF",
                        "attachments_json": {},
                        "markscheme": null
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                },
                {
                    "id": 41377,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "j",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-11-15T12:54:57.466Z",
                    "updated_at": "2024-11-15T12:54:57.466Z",
                    "master_editable": true,
                    "has_own_child": true,
                    "segment_type_id": 22108,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22108,
                        "content": "<p>Addition of 1 + 5 ?</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "yIKOQATCdZ3kBXlB",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "VzoaJ466GraGs6H8",
                                        "checked": false,
                                        "content": "<p>2</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "dO371dEHQaP8sk4h",
                                        "checked": false,
                                        "content": "<p>3</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "dNurvuTYNpHCmaVe",
                                        "checked": false,
                                        "content": "<p>5</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "wrWNv7HHlWUcjuER",
                                        "checked": false,
                                        "content": "<p>6</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41377,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-11-15T12:54:57.469Z",
                        "updated_at": "2024-11-15T12:54:57.469Z",
                        "custom_fields": "{}",
                        "uuid": "01JCQY85NXFX8B1EC6Q9E854GH",
                        "attachments_json": {},
                        "markscheme": null
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                },
                {
                    "id": 41378,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "r",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-11-15T12:56:57.543Z",
                    "updated_at": "2024-11-15T12:56:57.543Z",
                    "master_editable": true,
                    "has_own_child": true,
                    "segment_type_id": 22109,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22109,
                        "content": "<p>Subtraction of 81-11 ?</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "TuZaCXnPgIzzjomw",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "nBEpJAEbt48KacTH",
                                        "checked": false,
                                        "content": "<p>34</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "sO4solhbpUuokuHw",
                                        "checked": false,
                                        "content": "<p>23</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "DVaQaqyIjiEHxpld",
                                        "checked": false,
                                        "content": "<p>70</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "hsRLciKUX2256iOY",
                                        "checked": false,
                                        "content": "<p>77</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41378,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-11-15T12:56:57.549Z",
                        "updated_at": "2024-11-15T12:56:57.549Z",
                        "custom_fields": "{}",
                        "uuid": "01JCQYBTYDVRA0HYT9JTX0CB47",
                        "attachments_json": {},
                        "markscheme": null
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                },
                {
                    "id": 41379,
                    "segment_type": "question",
                    "experience_id": 1302,
                    "user_id": 1053,
                    "parent_id": 41375,
                    "parent_type": "segment",
                    "title": null,
                    "children_order": {},
                    "points": "0.0",
                    "position": "v",
                    "settings": {
                        "mode": "exam_mode",
                        "allow_embed": false
                    },
                    "custom_fields": "{}",
                    "archived": false,
                    "created_at": "2024-11-15T12:57:53.304Z",
                    "updated_at": "2024-11-15T12:57:53.304Z",
                    "master_editable": true,
                    "has_own_child": true,
                    "segment_type_id": 22110,
                    "nested_children": [],
                    "descendants": [],
                    "section_segment_attributes": null,
                    "text_segment_attributes": null,
                    "resource_segment_attributes": null,
                    "question_segment_attributes": {
                        "id": 22110,
                        "content": "<p>Addition of 45 + 22 ?</p>",
                        "hint": null,
                        "answer_explanation": "",
                        "points": null,
                        "teacher_json": null,
                        "student_json": {
                            "json_uuid": "P1kuaTR0hknGDzjm",
                            "segment_data": {
                                "options": [
                                    {
                                        "id": "W6ZVdHQjKfZugwt0",
                                        "checked": false,
                                        "content": "<p>44</p>",
                                        "placeholder": "Option 1"
                                    },
                                    {
                                        "id": "88tMz2Gb0EIdWL2z",
                                        "checked": false,
                                        "content": "<p>67</p>",
                                        "placeholder": "Option 2"
                                    },
                                    {
                                        "id": "qMnluB6kg2NrBHlK",
                                        "checked": false,
                                        "content": "<p>45</p>",
                                        "placeholder": "Option 3"
                                    },
                                    {
                                        "id": "WH9kB9JSnC6u6FG6",
                                        "checked": false,
                                        "content": "<p>66</p>",
                                        "placeholder": "Option 4"
                                    }
                                ]
                            },
                            "segment_version": "1.0.1"
                        },
                        "with_extra_answer_box": null,
                        "is_game": false,
                        "question_type": "mcq_single",
                        "segment_id": 41379,
                        "user_id": null,
                        "experience_id": null,
                        "created_at": "2024-11-15T12:57:53.309Z",
                        "updated_at": "2024-11-15T12:57:53.309Z",
                        "custom_fields": "{}",
                        "uuid": "01JCQYDHCXDWRNDYK2EJWNYT4C",
                        "attachments_json": {},
                        "markscheme": null
                    },
                    "questionbank_id": null,
                    "relation_items": [
                        {
                            "questionbank_id": null,
                            "programme_id": null,
                            "org_programme_id": null,
                            "subject_id": null,
                            "grade_id": null,
                            "questionbank_items": [],
                            "org_programme_items": [],
                            "subject_items": [],
                            "grade_items": [],
                            "tag_items": [],
                            "syllabus_items": [],
                            "difficulty_level_items": [],
                            "teaching_level_items": [],
                            "command_term_items": [],
                            "depth_of_knowledge_items": [],
                            "assessment_objective_items": [],
                            "syllabus_content_ids": null,
                            "difficulty_level_tag_ids": null,
                            "teaching_level_tag_ids": null,
                            "command_term_tag_ids": null,
                            "depth_of_knowledge_tag_ids": null,
                            "assessment_objective_tag_ids": null
                        }
                    ],
                    "rubric": null,
                    "criterium_associations_attributes": [],
                    "uuid": null,
                    "tag_labels": [],
                    "user_response": [],
                    "experience_data": {}
                }
            ]
        }
    ],
    "nested_children": [],
    "experience_membership_group_ids": [],
    "experience_memberships_groups": [],
    "experience_membership_student_ids": [
        853,
        2920
    ],
    "experience_memberships_students": [
        {
            "id": 1005,
            "name": null,
            "experience_id": 1302,
            "type_c": "user",
            "memberable_type": "student",
            "memberable_id": 853,
            "custom_fields": {},
            "settings": {},
            "archived": false,
            "created_at": "2024-11-15T12:58:39.205Z",
            "updated_at": "2024-11-15T12:58:55.147Z"
        },
        {
            "id": 1026,
            "name": null,
            "experience_id": 1302,
            "type_c": "user",
            "memberable_type": "student",
            "memberable_id": 2920,
            "custom_fields": {},
            "settings": {},
            "archived": false,
            "created_at": "2024-11-21T15:37:51.603Z",
            "updated_at": "2024-11-21T15:37:51.603Z"
        }
    ],
    "experience_membership_collaborator_ids": [],
    "experience_memberships_collaborators": [],
    "experience_membership_invigilator_ids": [],
    "experience_memberships_invigilators": [],
    "collaborators": [
        "admin testing"
    ],
    "students": null,
    "group_students": null,
    "groups": [],
    "created_by": "admin testing",
    "last_updated_by": "admin testing",
    "relation_items": [
        {
            "questionbank_id": null,
            "programme_id": 5,
            "org_programme_id": 118,
            "subject_id": 1848,
            "programme_subject_id": 5,
            "grade_id": 502,
            "grade_code": "diploma;12",
            "grade_number": null,
            "questionbank_items": [],
            "org_programme_items": [
                {
                    "id": 254,
                    "org_programme_id": 118,
                    "itemable_type": "Experience",
                    "itemable_id": 1302,
                    "archived": false,
                    "created_at": "2024-11-15T12:52:13.903Z",
                    "updated_at": "2024-11-15T12:52:13.903Z",
                    "uuid": "01JCQY35YFEQP5H8VTZA16K5J4"
                }
            ],
            "subject_items": [
                {
                    "id": 3177,
                    "subject_id": 1848,
                    "itemable_type": "Experience",
                    "itemable_id": 1302,
                    "archived": false,
                    "created_at": "2024-11-15T12:52:13.909Z",
                    "updated_at": "2024-11-15T12:52:13.909Z",
                    "programme_subject_id": 5,
                    "label": "Visual Arts",
                    "uuid": "01JCQY35YK2T19B18D8FMV2V8N"
                }
            ],
            "grade_items": [
                {
                    "id": 3177,
                    "grade_id": 502,
                    "itemable_type": "Experience",
                    "itemable_id": 1302,
                    "archived": false,
                    "created_at": "2024-11-15T12:52:13.915Z",
                    "updated_at": "2024-11-15T12:52:13.915Z",
                    "programme_grade_id": 1,
                    "label": "Grade 11",
                    "uuid": "01JCQY35YSX69GHYPBBWMK40XB"
                }
            ],
            "paper_type_items": [],
            "paper_type_tag_ids": [],
            "teaching_level_items": [],
            "teaching_level_tag_ids": [],
            "standard_collection_content_area_items": [],
            "standard_collection_content_area_tag_ids": []
        }
    ],
    "questionbank_id": null,
    "questionbank_title": "Schoolbank",
    "questionbank": null,
    "original_questionbank": null,
    "uuid": null,
    "uid": "01JCQY35W26DJGRQ5KMWDC6P8J",
    "questions_count": 10,
    "attemptable_questions_count": 10,
    "is_mb_linked": false,
    "experience_memberships_editors": [
        {
            "id": 1004,
            "name": "admin testing",
            "experience_id": 1302,
            "type_c": "user",
            "memberable_type": "owner",
            "memberable_id": 1053,
            "custom_fields": {},
            "settings": {},
            "archived": false,
            "created_at": "2024-11-15T12:52:13.894Z",
            "updated_at": "2024-11-15T12:52:13.894Z"
        }
    ],
    "criterium_associations": [],
    "criterium_associations_attributes": [],
    "rubric": {
        "id": 20,
        "title": "Comments only",
        "desc": "",
        "org_id": null,
        "public": true,
        "type_c": "comments_only",
        "archived": false,
        "settings": "{}",
        "created_at": "2022-07-16T03:15:32.460Z",
        "updated_at": "2022-07-16T03:15:32.460Z",
        "rubric_associations": [
            {
                "id": 37,
                "rubric_id": 20,
                "associable_type": "Programme",
                "associable_id": 17,
                "archived": false,
                "custom_fields": "{}",
                "settings": "{}",
                "created_at": "2022-07-19T16:04:43.379Z",
                "updated_at": "2022-07-19T16:04:43.379Z",
                "uuid": "01G8BK8PQKP4R75NG3CQT8TFT9"
            },
            {
                "id": 35,
                "rubric_id": 20,
                "associable_type": "Programme",
                "associable_id": 5,
                "archived": false,
                "custom_fields": "{}",
                "settings": "{}",
                "created_at": "2022-08-16T20:55:59.895Z",
                "updated_at": "2022-08-16T20:55:59.895Z",
                "uuid": "01GAM725MQ2RNWBVDXJTRYQX6W"
            },
            {
                "id": 34,
                "rubric_id": 20,
                "associable_type": "Programme",
                "associable_id": 18,
                "archived": false,
                "custom_fields": "{}",
                "settings": "{}",
                "created_at": "2022-07-16T03:15:32.468Z",
                "updated_at": "2022-07-16T03:15:32.468Z",
                "uuid": "01G82G24FMKAMFBV7BN3FN8VJK"
            },
            {
                "id": 36,
                "rubric_id": 20,
                "associable_type": "Programme",
                "associable_id": 7,
                "archived": false,
                "custom_fields": "{}",
                "settings": "{}",
                "created_at": "2022-07-19T16:04:43.376Z",
                "updated_at": "2022-07-19T16:04:43.376Z",
                "uuid": "01G8BK8PQG5MZ96S1WTDZNDFD6"
            }
        ],
        "criteria": [
            {
                "id": 74,
                "title": null,
                "desc": null,
                "rubric_id": 20,
                "org_id": null,
                "archived": false,
                "custom_fields": "{}",
                "created_at": "2022-07-16T03:15:32.474Z",
                "updated_at": "2022-07-16T03:15:32.474Z",
                "label": null,
                "uuid": "01G82G24FSJV1CXCZEW1KE2QF5",
                "levels_json": {},
                "strands": {}
            }
        ]
    },
    "tag_labels": [],
    "response_counts": {},
    "standards_content_area_tag": null,
    "tagged_standards_content_areas_data": null,
    "experience_user": null,
    "student_experience_membership": null,
    "is_student_mapped": false,
    "attempts": 0,
    "exp_org_enabled_features": {
        "questionbank": true,
        "live_attempt_status": true,
        "anonymous_grading": true,
        "view_user_response_backups": true,
        "spellcheck": true,
        "offline_user_responses": true,
        "wiris_math_plugin": true,
        "audio_in_question_content": true,
        "media_comments": true,
        "question_type_audio_input": true,
        "question_type_video_input": true,
        "audit_logs": true,
        "task_specific_clarification": true,
        "task_in_library": true,
        "achievement_level_calculator": true,
        "create_submissions": true,
        "convert_to_achievement_level": true,
        "allow_generate_transcript": true,
        "allow_chatgpt_for_teachers": true,
        "manage_user_level_permissions": true,
        "ai_writing_assistant": true,
        "ai_generate_questions_from_video": true,
        "ai_generate_questions_from_image": true,
        "grade_with_ai": true,
        "generate_explanation_with_ai": true,
        "ai_generate_questions_with_prompt": true,
        "speech_to_text_plugin": true,
        "text_to_speech": true,
        "enable_folder_view_in_my_assessment": true
    }
};
export default exam;
