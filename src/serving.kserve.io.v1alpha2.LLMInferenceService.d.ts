/** Generated from Remote JSON Schema for serving.kserve.io.v1alpha2.LLMInferenceService */

export interface ServingKserveIoV1Alpha2LLMInferenceService {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  spec?: {
    annotations?: {
      [k: string]: string;
    };
    baseRefs?: {
      name?: string;
      [k: string]: unknown;
    }[];
    labels?: {
      [k: string]: string;
    };
    model?: {
      lora?: {
        adapters?: {
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      name?: string;
      uri: string;
      [k: string]: unknown;
    };
    parallelism?: {
      data?: number;
      dataLocal?: number;
      dataRPCPort?: number;
      expert?: boolean;
      pipeline?: number;
      tensor?: number;
      [k: string]: unknown;
    };
    prefill?: {
      annotations?: {
        [k: string]: string;
      };
      labels?: {
        [k: string]: string;
      };
      parallelism?: {
        data?: number;
        dataLocal?: number;
        dataRPCPort?: number;
        expert?: boolean;
        pipeline?: number;
        tensor?: number;
        [k: string]: unknown;
      };
      replicas?: number;
      scaling?: {
        maxReplicas: number;
        minReplicas?: number;
        wva?: {
          hpa?: {
            behavior?: {
              scaleDown?: {
                policies?: {
                  periodSeconds: number;
                  type: string;
                  value: number;
                  [k: string]: unknown;
                }[];
                selectPolicy?: string;
                stabilizationWindowSeconds?: number;
                tolerance?: number | string;
                [k: string]: unknown;
              };
              scaleUp?: {
                policies?: {
                  periodSeconds: number;
                  type: string;
                  value: number;
                  [k: string]: unknown;
                }[];
                selectPolicy?: string;
                stabilizationWindowSeconds?: number;
                tolerance?: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          keda?: {
            advanced?: {
              horizontalPodAutoscalerConfig?: {
                behavior?: {
                  scaleDown?: {
                    policies?: {
                      periodSeconds: number;
                      type: string;
                      value: number;
                      [k: string]: unknown;
                    }[];
                    selectPolicy?: string;
                    stabilizationWindowSeconds?: number;
                    tolerance?: number | string;
                    [k: string]: unknown;
                  };
                  scaleUp?: {
                    policies?: {
                      periodSeconds: number;
                      type: string;
                      value: number;
                      [k: string]: unknown;
                    }[];
                    selectPolicy?: string;
                    stabilizationWindowSeconds?: number;
                    tolerance?: number | string;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                name?: string;
                [k: string]: unknown;
              };
              restoreToOriginalReplicaCount?: boolean;
              scalingModifiers?: {
                activationTarget?: string;
                formula?: string;
                metricType?: 'AverageValue' | 'Value';
                target?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            cooldownPeriod?: number;
            fallback?: {
              behavior?: 'static' | 'currentReplicas' | 'currentReplicasIfHigher' | 'currentReplicasIfLower';
              failureThreshold: number;
              replicas: number;
              [k: string]: unknown;
            };
            idleReplicaCount?: number;
            initialCooldownPeriod?: number;
            pollingInterval?: number;
            [k: string]: unknown;
          };
          variantCost?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      template?: {
        activeDeadlineSeconds?: number;
        affinity?: {
          nodeAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              preference: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchFields?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              };
              weight: number;
              [k: string]: unknown;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              nodeSelectorTerms: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchFields?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          podAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              podAffinityTerm: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                namespaceSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                namespaces?: string[];
                topologyKey: string;
                [k: string]: unknown;
              };
              weight: number;
              [k: string]: unknown;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          podAntiAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              podAffinityTerm: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                namespaceSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                namespaces?: string[];
                topologyKey: string;
                [k: string]: unknown;
              };
              weight: number;
              [k: string]: unknown;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        automountServiceAccountToken?: boolean;
        containers?: {
          args?: string[];
          command?: string[];
          env?: {
            name: string;
            value?: string;
            valueFrom?: {
              configMapKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              fieldRef?: {
                apiVersion?: string;
                fieldPath: string;
                [k: string]: unknown;
              };
              fileKeyRef?: {
                key: string;
                optional?: boolean;
                path: string;
                volumeName: string;
                [k: string]: unknown;
              };
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource: string;
                [k: string]: unknown;
              };
              secretKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          envFrom?: {
            configMapRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            prefix?: string;
            secretRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          image?: string;
          imagePullPolicy?: string;
          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            preStop?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            stopSignal?: string;
            [k: string]: unknown;
          };
          livenessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          name: string;
          ports?: {
            containerPort: number;
            hostIP?: string;
            hostPort?: number;
            name?: string;
            protocol?: string;
            [k: string]: unknown;
          }[];
          readinessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          resizePolicy?: {
            resourceName: string;
            restartPolicy: string;
            [k: string]: unknown;
          }[];
          resources?: {
            claims?: {
              name: string;
              request?: string;
              [k: string]: unknown;
            }[];
            limits?: {
              [k: string]: number | string;
            };
            requests?: {
              [k: string]: number | string;
            };
            [k: string]: unknown;
          };
          restartPolicy?: string;
          restartPolicyRules?: {
            action: string;
            exitCodes?: {
              operator: string;
              values?: number[];
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          securityContext?: {
            allowPrivilegeEscalation?: boolean;
            appArmorProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            capabilities?: {
              add?: string[];
              drop?: string[];
              [k: string]: unknown;
            };
            privileged?: boolean;
            procMount?: string;
            readOnlyRootFilesystem?: boolean;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
              [k: string]: unknown;
            };
            seccompProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          startupProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          stdin?: boolean;
          stdinOnce?: boolean;
          terminationMessagePath?: string;
          terminationMessagePolicy?: string;
          tty?: boolean;
          volumeDevices?: {
            devicePath: string;
            name: string;
            [k: string]: unknown;
          }[];
          volumeMounts?: {
            mountPath: string;
            mountPropagation?: string;
            name: string;
            readOnly?: boolean;
            recursiveReadOnly?: string;
            subPath?: string;
            subPathExpr?: string;
            [k: string]: unknown;
          }[];
          workingDir?: string;
          [k: string]: unknown;
        }[];
        dnsConfig?: {
          nameservers?: string[];
          options?: {
            name?: string;
            value?: string;
            [k: string]: unknown;
          }[];
          searches?: string[];
          [k: string]: unknown;
        };
        dnsPolicy?: string;
        enableServiceLinks?: boolean;
        ephemeralContainers?: {
          args?: string[];
          command?: string[];
          env?: {
            name: string;
            value?: string;
            valueFrom?: {
              configMapKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              fieldRef?: {
                apiVersion?: string;
                fieldPath: string;
                [k: string]: unknown;
              };
              fileKeyRef?: {
                key: string;
                optional?: boolean;
                path: string;
                volumeName: string;
                [k: string]: unknown;
              };
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource: string;
                [k: string]: unknown;
              };
              secretKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          envFrom?: {
            configMapRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            prefix?: string;
            secretRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          image?: string;
          imagePullPolicy?: string;
          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            preStop?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            stopSignal?: string;
            [k: string]: unknown;
          };
          livenessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          name: string;
          ports?: {
            containerPort: number;
            hostIP?: string;
            hostPort?: number;
            name?: string;
            protocol?: string;
            [k: string]: unknown;
          }[];
          readinessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          resizePolicy?: {
            resourceName: string;
            restartPolicy: string;
            [k: string]: unknown;
          }[];
          resources?: {
            claims?: {
              name: string;
              request?: string;
              [k: string]: unknown;
            }[];
            limits?: {
              [k: string]: number | string;
            };
            requests?: {
              [k: string]: number | string;
            };
            [k: string]: unknown;
          };
          restartPolicy?: string;
          restartPolicyRules?: {
            action: string;
            exitCodes?: {
              operator: string;
              values?: number[];
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          securityContext?: {
            allowPrivilegeEscalation?: boolean;
            appArmorProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            capabilities?: {
              add?: string[];
              drop?: string[];
              [k: string]: unknown;
            };
            privileged?: boolean;
            procMount?: string;
            readOnlyRootFilesystem?: boolean;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
              [k: string]: unknown;
            };
            seccompProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          startupProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          stdin?: boolean;
          stdinOnce?: boolean;
          targetContainerName?: string;
          terminationMessagePath?: string;
          terminationMessagePolicy?: string;
          tty?: boolean;
          volumeDevices?: {
            devicePath: string;
            name: string;
            [k: string]: unknown;
          }[];
          volumeMounts?: {
            mountPath: string;
            mountPropagation?: string;
            name: string;
            readOnly?: boolean;
            recursiveReadOnly?: string;
            subPath?: string;
            subPathExpr?: string;
            [k: string]: unknown;
          }[];
          workingDir?: string;
          [k: string]: unknown;
        }[];
        hostAliases?: {
          hostnames?: string[];
          ip: string;
          [k: string]: unknown;
        }[];
        hostIPC?: boolean;
        hostNetwork?: boolean;
        hostPID?: boolean;
        hostUsers?: boolean;
        hostname?: string;
        hostnameOverride?: string;
        imagePullSecrets?: {
          name?: string;
          [k: string]: unknown;
        }[];
        initContainers?: {
          args?: string[];
          command?: string[];
          env?: {
            name: string;
            value?: string;
            valueFrom?: {
              configMapKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              fieldRef?: {
                apiVersion?: string;
                fieldPath: string;
                [k: string]: unknown;
              };
              fileKeyRef?: {
                key: string;
                optional?: boolean;
                path: string;
                volumeName: string;
                [k: string]: unknown;
              };
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource: string;
                [k: string]: unknown;
              };
              secretKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          envFrom?: {
            configMapRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            prefix?: string;
            secretRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          image?: string;
          imagePullPolicy?: string;
          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            preStop?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            stopSignal?: string;
            [k: string]: unknown;
          };
          livenessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          name: string;
          ports?: {
            containerPort: number;
            hostIP?: string;
            hostPort?: number;
            name?: string;
            protocol?: string;
            [k: string]: unknown;
          }[];
          readinessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          resizePolicy?: {
            resourceName: string;
            restartPolicy: string;
            [k: string]: unknown;
          }[];
          resources?: {
            claims?: {
              name: string;
              request?: string;
              [k: string]: unknown;
            }[];
            limits?: {
              [k: string]: number | string;
            };
            requests?: {
              [k: string]: number | string;
            };
            [k: string]: unknown;
          };
          restartPolicy?: string;
          restartPolicyRules?: {
            action: string;
            exitCodes?: {
              operator: string;
              values?: number[];
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          securityContext?: {
            allowPrivilegeEscalation?: boolean;
            appArmorProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            capabilities?: {
              add?: string[];
              drop?: string[];
              [k: string]: unknown;
            };
            privileged?: boolean;
            procMount?: string;
            readOnlyRootFilesystem?: boolean;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
              [k: string]: unknown;
            };
            seccompProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          startupProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          stdin?: boolean;
          stdinOnce?: boolean;
          terminationMessagePath?: string;
          terminationMessagePolicy?: string;
          tty?: boolean;
          volumeDevices?: {
            devicePath: string;
            name: string;
            [k: string]: unknown;
          }[];
          volumeMounts?: {
            mountPath: string;
            mountPropagation?: string;
            name: string;
            readOnly?: boolean;
            recursiveReadOnly?: string;
            subPath?: string;
            subPathExpr?: string;
            [k: string]: unknown;
          }[];
          workingDir?: string;
          [k: string]: unknown;
        }[];
        nodeName?: string;
        nodeSelector?: {
          [k: string]: string;
        };
        os?: {
          name: string;
          [k: string]: unknown;
        };
        overhead?: {
          [k: string]: number | string;
        };
        preemptionPolicy?: string;
        priority?: number;
        priorityClassName?: string;
        readinessGates?: {
          conditionType: string;
          [k: string]: unknown;
        }[];
        resourceClaims?: {
          name: string;
          resourceClaimName?: string;
          resourceClaimTemplateName?: string;
          [k: string]: unknown;
        }[];
        resources?: {
          claims?: {
            name: string;
            request?: string;
            [k: string]: unknown;
          }[];
          limits?: {
            [k: string]: number | string;
          };
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        restartPolicy?: string;
        runtimeClassName?: string;
        schedulerName?: string;
        schedulingGates?: {
          name: string;
          [k: string]: unknown;
        }[];
        securityContext?: {
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          fsGroup?: number;
          fsGroupChangePolicy?: string;
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          runAsUser?: number;
          seLinuxChangePolicy?: string;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
            [k: string]: unknown;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          supplementalGroups?: number[];
          supplementalGroupsPolicy?: string;
          sysctls?: {
            name: string;
            value: string;
            [k: string]: unknown;
          }[];
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        serviceAccount?: string;
        serviceAccountName?: string;
        setHostnameAsFQDN?: boolean;
        shareProcessNamespace?: boolean;
        subdomain?: string;
        terminationGracePeriodSeconds?: number;
        tolerations?: {
          effect?: string;
          key?: string;
          operator?: string;
          tolerationSeconds?: number;
          value?: string;
          [k: string]: unknown;
        }[];
        topologySpreadConstraints?: {
          labelSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          matchLabelKeys?: string[];
          maxSkew: number;
          minDomains?: number;
          nodeAffinityPolicy?: string;
          nodeTaintsPolicy?: string;
          topologyKey: string;
          whenUnsatisfiable: string;
          [k: string]: unknown;
        }[];
        volumes?: {
          awsElasticBlockStore?: {
            fsType?: string;
            partition?: number;
            readOnly?: boolean;
            volumeID: string;
            [k: string]: unknown;
          };
          azureDisk?: {
            cachingMode?: string;
            diskName: string;
            diskURI: string;
            fsType?: string;
            kind?: string;
            readOnly?: boolean;
            [k: string]: unknown;
          };
          azureFile?: {
            readOnly?: boolean;
            secretName: string;
            shareName: string;
            [k: string]: unknown;
          };
          cephfs?: {
            monitors: string[];
            path?: string;
            readOnly?: boolean;
            secretFile?: string;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            user?: string;
            [k: string]: unknown;
          };
          cinder?: {
            fsType?: string;
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            volumeID: string;
            [k: string]: unknown;
          };
          configMap?: {
            defaultMode?: number;
            items?: {
              key: string;
              mode?: number;
              path: string;
              [k: string]: unknown;
            }[];
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          csi?: {
            driver: string;
            fsType?: string;
            nodePublishSecretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            readOnly?: boolean;
            volumeAttributes?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          downwardAPI?: {
            defaultMode?: number;
            items?: {
              fieldRef?: {
                apiVersion?: string;
                fieldPath: string;
                [k: string]: unknown;
              };
              mode?: number;
              path: string;
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          emptyDir?: {
            medium?: string;
            sizeLimit?: number | string;
            [k: string]: unknown;
          };
          ephemeral?: {
            volumeClaimTemplate?: {
              metadata?: {
                [k: string]: unknown;
              };
              spec: {
                accessModes?: string[];
                dataSource?: {
                  apiGroup?: string;
                  kind: string;
                  name: string;
                  [k: string]: unknown;
                };
                dataSourceRef?: {
                  apiGroup?: string;
                  kind: string;
                  name: string;
                  namespace?: string;
                  [k: string]: unknown;
                };
                resources?: {
                  limits?: {
                    [k: string]: number | string;
                  };
                  requests?: {
                    [k: string]: number | string;
                  };
                  [k: string]: unknown;
                };
                selector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                storageClassName?: string;
                volumeAttributesClassName?: string;
                volumeMode?: string;
                volumeName?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          fc?: {
            fsType?: string;
            lun?: number;
            readOnly?: boolean;
            targetWWNs?: string[];
            wwids?: string[];
            [k: string]: unknown;
          };
          flexVolume?: {
            driver: string;
            fsType?: string;
            options?: {
              [k: string]: string;
            };
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          flocker?: {
            datasetName?: string;
            datasetUUID?: string;
            [k: string]: unknown;
          };
          gcePersistentDisk?: {
            fsType?: string;
            partition?: number;
            pdName: string;
            readOnly?: boolean;
            [k: string]: unknown;
          };
          gitRepo?: {
            directory?: string;
            repository: string;
            revision?: string;
            [k: string]: unknown;
          };
          glusterfs?: {
            endpoints: string;
            path: string;
            readOnly?: boolean;
            [k: string]: unknown;
          };
          hostPath?: {
            path: string;
            type?: string;
            [k: string]: unknown;
          };
          image?: {
            pullPolicy?: string;
            reference?: string;
            [k: string]: unknown;
          };
          iscsi?: {
            chapAuthDiscovery?: boolean;
            chapAuthSession?: boolean;
            fsType?: string;
            initiatorName?: string;
            iqn: string;
            iscsiInterface?: string;
            lun: number;
            portals?: string[];
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            targetPortal: string;
            [k: string]: unknown;
          };
          name: string;
          nfs?: {
            path: string;
            readOnly?: boolean;
            server: string;
            [k: string]: unknown;
          };
          persistentVolumeClaim?: {
            claimName: string;
            readOnly?: boolean;
            [k: string]: unknown;
          };
          photonPersistentDisk?: {
            fsType?: string;
            pdID: string;
            [k: string]: unknown;
          };
          portworxVolume?: {
            fsType?: string;
            readOnly?: boolean;
            volumeID: string;
            [k: string]: unknown;
          };
          projected?: {
            defaultMode?: number;
            sources?: {
              clusterTrustBundle?: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                name?: string;
                optional?: boolean;
                path: string;
                signerName?: string;
                [k: string]: unknown;
              };
              configMap?: {
                items?: {
                  key: string;
                  mode?: number;
                  path: string;
                  [k: string]: unknown;
                }[];
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              downwardAPI?: {
                items?: {
                  fieldRef?: {
                    apiVersion?: string;
                    fieldPath: string;
                    [k: string]: unknown;
                  };
                  mode?: number;
                  path: string;
                  resourceFieldRef?: {
                    containerName?: string;
                    divisor?: number | string;
                    resource: string;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              };
              podCertificate?: {
                certificateChainPath?: string;
                credentialBundlePath?: string;
                keyPath?: string;
                keyType: string;
                maxExpirationSeconds?: number;
                signerName: string;
                [k: string]: unknown;
              };
              secret?: {
                items?: {
                  key: string;
                  mode?: number;
                  path: string;
                  [k: string]: unknown;
                }[];
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              serviceAccountToken?: {
                audience?: string;
                expirationSeconds?: number;
                path: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          quobyte?: {
            group?: string;
            readOnly?: boolean;
            registry: string;
            tenant?: string;
            user?: string;
            volume: string;
            [k: string]: unknown;
          };
          rbd?: {
            fsType?: string;
            image: string;
            keyring?: string;
            monitors: string[];
            pool?: string;
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            user?: string;
            [k: string]: unknown;
          };
          scaleIO?: {
            fsType?: string;
            gateway: string;
            protectionDomain?: string;
            readOnly?: boolean;
            secretRef: {
              name?: string;
              [k: string]: unknown;
            };
            sslEnabled?: boolean;
            storageMode?: string;
            storagePool?: string;
            system: string;
            volumeName?: string;
            [k: string]: unknown;
          };
          secret?: {
            defaultMode?: number;
            items?: {
              key: string;
              mode?: number;
              path: string;
              [k: string]: unknown;
            }[];
            optional?: boolean;
            secretName?: string;
            [k: string]: unknown;
          };
          storageos?: {
            fsType?: string;
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            volumeName?: string;
            volumeNamespace?: string;
            [k: string]: unknown;
          };
          vsphereVolume?: {
            fsType?: string;
            storagePolicyID?: string;
            storagePolicyName?: string;
            volumePath: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      worker?: {
        activeDeadlineSeconds?: number;
        affinity?: {
          nodeAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              preference: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchFields?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              };
              weight: number;
              [k: string]: unknown;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              nodeSelectorTerms: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchFields?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          podAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              podAffinityTerm: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                namespaceSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                namespaces?: string[];
                topologyKey: string;
                [k: string]: unknown;
              };
              weight: number;
              [k: string]: unknown;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          podAntiAffinity?: {
            preferredDuringSchedulingIgnoredDuringExecution?: {
              podAffinityTerm: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                namespaceSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                namespaces?: string[];
                topologyKey: string;
                [k: string]: unknown;
              };
              weight: number;
              [k: string]: unknown;
            }[];
            requiredDuringSchedulingIgnoredDuringExecution?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        automountServiceAccountToken?: boolean;
        containers?: {
          args?: string[];
          command?: string[];
          env?: {
            name: string;
            value?: string;
            valueFrom?: {
              configMapKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              fieldRef?: {
                apiVersion?: string;
                fieldPath: string;
                [k: string]: unknown;
              };
              fileKeyRef?: {
                key: string;
                optional?: boolean;
                path: string;
                volumeName: string;
                [k: string]: unknown;
              };
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource: string;
                [k: string]: unknown;
              };
              secretKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          envFrom?: {
            configMapRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            prefix?: string;
            secretRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          image?: string;
          imagePullPolicy?: string;
          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            preStop?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            stopSignal?: string;
            [k: string]: unknown;
          };
          livenessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          name: string;
          ports?: {
            containerPort: number;
            hostIP?: string;
            hostPort?: number;
            name?: string;
            protocol?: string;
            [k: string]: unknown;
          }[];
          readinessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          resizePolicy?: {
            resourceName: string;
            restartPolicy: string;
            [k: string]: unknown;
          }[];
          resources?: {
            claims?: {
              name: string;
              request?: string;
              [k: string]: unknown;
            }[];
            limits?: {
              [k: string]: number | string;
            };
            requests?: {
              [k: string]: number | string;
            };
            [k: string]: unknown;
          };
          restartPolicy?: string;
          restartPolicyRules?: {
            action: string;
            exitCodes?: {
              operator: string;
              values?: number[];
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          securityContext?: {
            allowPrivilegeEscalation?: boolean;
            appArmorProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            capabilities?: {
              add?: string[];
              drop?: string[];
              [k: string]: unknown;
            };
            privileged?: boolean;
            procMount?: string;
            readOnlyRootFilesystem?: boolean;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
              [k: string]: unknown;
            };
            seccompProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          startupProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          stdin?: boolean;
          stdinOnce?: boolean;
          terminationMessagePath?: string;
          terminationMessagePolicy?: string;
          tty?: boolean;
          volumeDevices?: {
            devicePath: string;
            name: string;
            [k: string]: unknown;
          }[];
          volumeMounts?: {
            mountPath: string;
            mountPropagation?: string;
            name: string;
            readOnly?: boolean;
            recursiveReadOnly?: string;
            subPath?: string;
            subPathExpr?: string;
            [k: string]: unknown;
          }[];
          workingDir?: string;
          [k: string]: unknown;
        }[];
        dnsConfig?: {
          nameservers?: string[];
          options?: {
            name?: string;
            value?: string;
            [k: string]: unknown;
          }[];
          searches?: string[];
          [k: string]: unknown;
        };
        dnsPolicy?: string;
        enableServiceLinks?: boolean;
        ephemeralContainers?: {
          args?: string[];
          command?: string[];
          env?: {
            name: string;
            value?: string;
            valueFrom?: {
              configMapKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              fieldRef?: {
                apiVersion?: string;
                fieldPath: string;
                [k: string]: unknown;
              };
              fileKeyRef?: {
                key: string;
                optional?: boolean;
                path: string;
                volumeName: string;
                [k: string]: unknown;
              };
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource: string;
                [k: string]: unknown;
              };
              secretKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          envFrom?: {
            configMapRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            prefix?: string;
            secretRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          image?: string;
          imagePullPolicy?: string;
          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            preStop?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            stopSignal?: string;
            [k: string]: unknown;
          };
          livenessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          name: string;
          ports?: {
            containerPort: number;
            hostIP?: string;
            hostPort?: number;
            name?: string;
            protocol?: string;
            [k: string]: unknown;
          }[];
          readinessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          resizePolicy?: {
            resourceName: string;
            restartPolicy: string;
            [k: string]: unknown;
          }[];
          resources?: {
            claims?: {
              name: string;
              request?: string;
              [k: string]: unknown;
            }[];
            limits?: {
              [k: string]: number | string;
            };
            requests?: {
              [k: string]: number | string;
            };
            [k: string]: unknown;
          };
          restartPolicy?: string;
          restartPolicyRules?: {
            action: string;
            exitCodes?: {
              operator: string;
              values?: number[];
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          securityContext?: {
            allowPrivilegeEscalation?: boolean;
            appArmorProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            capabilities?: {
              add?: string[];
              drop?: string[];
              [k: string]: unknown;
            };
            privileged?: boolean;
            procMount?: string;
            readOnlyRootFilesystem?: boolean;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
              [k: string]: unknown;
            };
            seccompProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          startupProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          stdin?: boolean;
          stdinOnce?: boolean;
          targetContainerName?: string;
          terminationMessagePath?: string;
          terminationMessagePolicy?: string;
          tty?: boolean;
          volumeDevices?: {
            devicePath: string;
            name: string;
            [k: string]: unknown;
          }[];
          volumeMounts?: {
            mountPath: string;
            mountPropagation?: string;
            name: string;
            readOnly?: boolean;
            recursiveReadOnly?: string;
            subPath?: string;
            subPathExpr?: string;
            [k: string]: unknown;
          }[];
          workingDir?: string;
          [k: string]: unknown;
        }[];
        hostAliases?: {
          hostnames?: string[];
          ip: string;
          [k: string]: unknown;
        }[];
        hostIPC?: boolean;
        hostNetwork?: boolean;
        hostPID?: boolean;
        hostUsers?: boolean;
        hostname?: string;
        hostnameOverride?: string;
        imagePullSecrets?: {
          name?: string;
          [k: string]: unknown;
        }[];
        initContainers?: {
          args?: string[];
          command?: string[];
          env?: {
            name: string;
            value?: string;
            valueFrom?: {
              configMapKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              fieldRef?: {
                apiVersion?: string;
                fieldPath: string;
                [k: string]: unknown;
              };
              fileKeyRef?: {
                key: string;
                optional?: boolean;
                path: string;
                volumeName: string;
                [k: string]: unknown;
              };
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource: string;
                [k: string]: unknown;
              };
              secretKeyRef?: {
                key: string;
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          envFrom?: {
            configMapRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            prefix?: string;
            secretRef?: {
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          image?: string;
          imagePullPolicy?: string;
          lifecycle?: {
            postStart?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            preStop?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              sleep?: {
                seconds: number;
                [k: string]: unknown;
              };
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            stopSignal?: string;
            [k: string]: unknown;
          };
          livenessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          name: string;
          ports?: {
            containerPort: number;
            hostIP?: string;
            hostPort?: number;
            name?: string;
            protocol?: string;
            [k: string]: unknown;
          }[];
          readinessProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          resizePolicy?: {
            resourceName: string;
            restartPolicy: string;
            [k: string]: unknown;
          }[];
          resources?: {
            claims?: {
              name: string;
              request?: string;
              [k: string]: unknown;
            }[];
            limits?: {
              [k: string]: number | string;
            };
            requests?: {
              [k: string]: number | string;
            };
            [k: string]: unknown;
          };
          restartPolicy?: string;
          restartPolicyRules?: {
            action: string;
            exitCodes?: {
              operator: string;
              values?: number[];
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          securityContext?: {
            allowPrivilegeEscalation?: boolean;
            appArmorProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            capabilities?: {
              add?: string[];
              drop?: string[];
              [k: string]: unknown;
            };
            privileged?: boolean;
            procMount?: string;
            readOnlyRootFilesystem?: boolean;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
              [k: string]: unknown;
            };
            seccompProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          startupProbe?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            failureThreshold?: number;
            grpc?: {
              port: number;
              service?: string;
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            initialDelaySeconds?: number;
            periodSeconds?: number;
            successThreshold?: number;
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            terminationGracePeriodSeconds?: number;
            timeoutSeconds?: number;
            [k: string]: unknown;
          };
          stdin?: boolean;
          stdinOnce?: boolean;
          terminationMessagePath?: string;
          terminationMessagePolicy?: string;
          tty?: boolean;
          volumeDevices?: {
            devicePath: string;
            name: string;
            [k: string]: unknown;
          }[];
          volumeMounts?: {
            mountPath: string;
            mountPropagation?: string;
            name: string;
            readOnly?: boolean;
            recursiveReadOnly?: string;
            subPath?: string;
            subPathExpr?: string;
            [k: string]: unknown;
          }[];
          workingDir?: string;
          [k: string]: unknown;
        }[];
        nodeName?: string;
        nodeSelector?: {
          [k: string]: string;
        };
        os?: {
          name: string;
          [k: string]: unknown;
        };
        overhead?: {
          [k: string]: number | string;
        };
        preemptionPolicy?: string;
        priority?: number;
        priorityClassName?: string;
        readinessGates?: {
          conditionType: string;
          [k: string]: unknown;
        }[];
        resourceClaims?: {
          name: string;
          resourceClaimName?: string;
          resourceClaimTemplateName?: string;
          [k: string]: unknown;
        }[];
        resources?: {
          claims?: {
            name: string;
            request?: string;
            [k: string]: unknown;
          }[];
          limits?: {
            [k: string]: number | string;
          };
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        restartPolicy?: string;
        runtimeClassName?: string;
        schedulerName?: string;
        schedulingGates?: {
          name: string;
          [k: string]: unknown;
        }[];
        securityContext?: {
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          fsGroup?: number;
          fsGroupChangePolicy?: string;
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          runAsUser?: number;
          seLinuxChangePolicy?: string;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
            [k: string]: unknown;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          supplementalGroups?: number[];
          supplementalGroupsPolicy?: string;
          sysctls?: {
            name: string;
            value: string;
            [k: string]: unknown;
          }[];
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        serviceAccount?: string;
        serviceAccountName?: string;
        setHostnameAsFQDN?: boolean;
        shareProcessNamespace?: boolean;
        subdomain?: string;
        terminationGracePeriodSeconds?: number;
        tolerations?: {
          effect?: string;
          key?: string;
          operator?: string;
          tolerationSeconds?: number;
          value?: string;
          [k: string]: unknown;
        }[];
        topologySpreadConstraints?: {
          labelSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          matchLabelKeys?: string[];
          maxSkew: number;
          minDomains?: number;
          nodeAffinityPolicy?: string;
          nodeTaintsPolicy?: string;
          topologyKey: string;
          whenUnsatisfiable: string;
          [k: string]: unknown;
        }[];
        volumes?: {
          awsElasticBlockStore?: {
            fsType?: string;
            partition?: number;
            readOnly?: boolean;
            volumeID: string;
            [k: string]: unknown;
          };
          azureDisk?: {
            cachingMode?: string;
            diskName: string;
            diskURI: string;
            fsType?: string;
            kind?: string;
            readOnly?: boolean;
            [k: string]: unknown;
          };
          azureFile?: {
            readOnly?: boolean;
            secretName: string;
            shareName: string;
            [k: string]: unknown;
          };
          cephfs?: {
            monitors: string[];
            path?: string;
            readOnly?: boolean;
            secretFile?: string;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            user?: string;
            [k: string]: unknown;
          };
          cinder?: {
            fsType?: string;
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            volumeID: string;
            [k: string]: unknown;
          };
          configMap?: {
            defaultMode?: number;
            items?: {
              key: string;
              mode?: number;
              path: string;
              [k: string]: unknown;
            }[];
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          csi?: {
            driver: string;
            fsType?: string;
            nodePublishSecretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            readOnly?: boolean;
            volumeAttributes?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          downwardAPI?: {
            defaultMode?: number;
            items?: {
              fieldRef?: {
                apiVersion?: string;
                fieldPath: string;
                [k: string]: unknown;
              };
              mode?: number;
              path: string;
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          emptyDir?: {
            medium?: string;
            sizeLimit?: number | string;
            [k: string]: unknown;
          };
          ephemeral?: {
            volumeClaimTemplate?: {
              metadata?: {
                [k: string]: unknown;
              };
              spec: {
                accessModes?: string[];
                dataSource?: {
                  apiGroup?: string;
                  kind: string;
                  name: string;
                  [k: string]: unknown;
                };
                dataSourceRef?: {
                  apiGroup?: string;
                  kind: string;
                  name: string;
                  namespace?: string;
                  [k: string]: unknown;
                };
                resources?: {
                  limits?: {
                    [k: string]: number | string;
                  };
                  requests?: {
                    [k: string]: number | string;
                  };
                  [k: string]: unknown;
                };
                selector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                storageClassName?: string;
                volumeAttributesClassName?: string;
                volumeMode?: string;
                volumeName?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          fc?: {
            fsType?: string;
            lun?: number;
            readOnly?: boolean;
            targetWWNs?: string[];
            wwids?: string[];
            [k: string]: unknown;
          };
          flexVolume?: {
            driver: string;
            fsType?: string;
            options?: {
              [k: string]: string;
            };
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          flocker?: {
            datasetName?: string;
            datasetUUID?: string;
            [k: string]: unknown;
          };
          gcePersistentDisk?: {
            fsType?: string;
            partition?: number;
            pdName: string;
            readOnly?: boolean;
            [k: string]: unknown;
          };
          gitRepo?: {
            directory?: string;
            repository: string;
            revision?: string;
            [k: string]: unknown;
          };
          glusterfs?: {
            endpoints: string;
            path: string;
            readOnly?: boolean;
            [k: string]: unknown;
          };
          hostPath?: {
            path: string;
            type?: string;
            [k: string]: unknown;
          };
          image?: {
            pullPolicy?: string;
            reference?: string;
            [k: string]: unknown;
          };
          iscsi?: {
            chapAuthDiscovery?: boolean;
            chapAuthSession?: boolean;
            fsType?: string;
            initiatorName?: string;
            iqn: string;
            iscsiInterface?: string;
            lun: number;
            portals?: string[];
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            targetPortal: string;
            [k: string]: unknown;
          };
          name: string;
          nfs?: {
            path: string;
            readOnly?: boolean;
            server: string;
            [k: string]: unknown;
          };
          persistentVolumeClaim?: {
            claimName: string;
            readOnly?: boolean;
            [k: string]: unknown;
          };
          photonPersistentDisk?: {
            fsType?: string;
            pdID: string;
            [k: string]: unknown;
          };
          portworxVolume?: {
            fsType?: string;
            readOnly?: boolean;
            volumeID: string;
            [k: string]: unknown;
          };
          projected?: {
            defaultMode?: number;
            sources?: {
              clusterTrustBundle?: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                name?: string;
                optional?: boolean;
                path: string;
                signerName?: string;
                [k: string]: unknown;
              };
              configMap?: {
                items?: {
                  key: string;
                  mode?: number;
                  path: string;
                  [k: string]: unknown;
                }[];
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              downwardAPI?: {
                items?: {
                  fieldRef?: {
                    apiVersion?: string;
                    fieldPath: string;
                    [k: string]: unknown;
                  };
                  mode?: number;
                  path: string;
                  resourceFieldRef?: {
                    containerName?: string;
                    divisor?: number | string;
                    resource: string;
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              };
              podCertificate?: {
                certificateChainPath?: string;
                credentialBundlePath?: string;
                keyPath?: string;
                keyType: string;
                maxExpirationSeconds?: number;
                signerName: string;
                [k: string]: unknown;
              };
              secret?: {
                items?: {
                  key: string;
                  mode?: number;
                  path: string;
                  [k: string]: unknown;
                }[];
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              serviceAccountToken?: {
                audience?: string;
                expirationSeconds?: number;
                path: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          quobyte?: {
            group?: string;
            readOnly?: boolean;
            registry: string;
            tenant?: string;
            user?: string;
            volume: string;
            [k: string]: unknown;
          };
          rbd?: {
            fsType?: string;
            image: string;
            keyring?: string;
            monitors: string[];
            pool?: string;
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            user?: string;
            [k: string]: unknown;
          };
          scaleIO?: {
            fsType?: string;
            gateway: string;
            protectionDomain?: string;
            readOnly?: boolean;
            secretRef: {
              name?: string;
              [k: string]: unknown;
            };
            sslEnabled?: boolean;
            storageMode?: string;
            storagePool?: string;
            system: string;
            volumeName?: string;
            [k: string]: unknown;
          };
          secret?: {
            defaultMode?: number;
            items?: {
              key: string;
              mode?: number;
              path: string;
              [k: string]: unknown;
            }[];
            optional?: boolean;
            secretName?: string;
            [k: string]: unknown;
          };
          storageos?: {
            fsType?: string;
            readOnly?: boolean;
            secretRef?: {
              name?: string;
              [k: string]: unknown;
            };
            volumeName?: string;
            volumeNamespace?: string;
            [k: string]: unknown;
          };
          vsphereVolume?: {
            fsType?: string;
            storagePolicyID?: string;
            storagePolicyName?: string;
            volumePath: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    replicas?: number;
    router?: {
      gateway?: {
        refs?: {
          name?: string;
          namespace?: string;
          sectionName?: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      ingress?: {
        refs?: {
          name?: string;
          namespace?: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      route?: {
        http?: {
          refs?: {
            name?: string;
            [k: string]: unknown;
          }[];
          spec?: {
            /**
             * @maxItems 16
             */
            hostnames?: string[];
            /**
             * @maxItems 32
             */
            parentRefs?: {
              group?: string;
              kind?: string;
              name: string;
              namespace?: string;
              port?: number;
              sectionName?: string;
              [k: string]: unknown;
            }[];
            /**
             * @maxItems 16
             */
            rules?: {
              /**
               * @maxItems 16
               */
              backendRefs?: {
                /**
                 * @maxItems 16
                 */
                filters?: {
                  cors?: {
                    allowCredentials?: boolean;
                    /**
                     * @maxItems 64
                     */
                    allowHeaders?: string[];
                    /**
                     * @maxItems 9
                     */
                    allowMethods?: (
                      | 'GET'
                      | 'HEAD'
                      | 'POST'
                      | 'PUT'
                      | 'DELETE'
                      | 'CONNECT'
                      | 'OPTIONS'
                      | 'TRACE'
                      | 'PATCH'
                      | '*'
                    )[];
                    /**
                     * @maxItems 64
                     */
                    allowOrigins?: string[];
                    /**
                     * @maxItems 64
                     */
                    exposeHeaders?: string[];
                    maxAge?: number;
                    [k: string]: unknown;
                  };
                  extensionRef?: {
                    group: string;
                    kind: string;
                    name: string;
                    [k: string]: unknown;
                  };
                  externalAuth?: {
                    backendRef: {
                      group?: string;
                      kind?: string;
                      name: string;
                      namespace?: string;
                      port?: number;
                      [k: string]: unknown;
                    };
                    forwardBody?: {
                      maxSize?: number;
                      [k: string]: unknown;
                    };
                    grpc?: {
                      /**
                       * @maxItems 64
                       */
                      allowedHeaders?: string[];
                      [k: string]: unknown;
                    };
                    http?: {
                      /**
                       * @maxItems 64
                       */
                      allowedHeaders?: string[];
                      /**
                       * @maxItems 64
                       */
                      allowedResponseHeaders?: string[];
                      path?: string;
                      [k: string]: unknown;
                    };
                    protocol: 'HTTP' | 'GRPC';
                    [k: string]: unknown;
                  };
                  requestHeaderModifier?: {
                    /**
                     * @maxItems 16
                     */
                    add?: {
                      name: string;
                      value: string;
                      [k: string]: unknown;
                    }[];
                    /**
                     * @maxItems 16
                     */
                    remove?: string[];
                    /**
                     * @maxItems 16
                     */
                    set?: {
                      name: string;
                      value: string;
                      [k: string]: unknown;
                    }[];
                    [k: string]: unknown;
                  };
                  requestMirror?: {
                    backendRef: {
                      group?: string;
                      kind?: string;
                      name: string;
                      namespace?: string;
                      port?: number;
                      [k: string]: unknown;
                    };
                    fraction?: {
                      denominator?: number;
                      numerator: number;
                      [k: string]: unknown;
                    };
                    percent?: number;
                    [k: string]: unknown;
                  };
                  requestRedirect?: {
                    hostname?: string;
                    path?: {
                      replaceFullPath?: string;
                      replacePrefixMatch?: string;
                      type: 'ReplaceFullPath' | 'ReplacePrefixMatch';
                      [k: string]: unknown;
                    };
                    port?: number;
                    scheme?: 'http' | 'https';
                    statusCode?: 301 | 302;
                    [k: string]: unknown;
                  };
                  responseHeaderModifier?: {
                    /**
                     * @maxItems 16
                     */
                    add?: {
                      name: string;
                      value: string;
                      [k: string]: unknown;
                    }[];
                    /**
                     * @maxItems 16
                     */
                    remove?: string[];
                    /**
                     * @maxItems 16
                     */
                    set?: {
                      name: string;
                      value: string;
                      [k: string]: unknown;
                    }[];
                    [k: string]: unknown;
                  };
                  type:
                    | 'RequestHeaderModifier'
                    | 'ResponseHeaderModifier'
                    | 'RequestMirror'
                    | 'RequestRedirect'
                    | 'URLRewrite'
                    | 'ExtensionRef';
                  urlRewrite?: {
                    hostname?: string;
                    path?: {
                      replaceFullPath?: string;
                      replacePrefixMatch?: string;
                      type: 'ReplaceFullPath' | 'ReplacePrefixMatch';
                      [k: string]: unknown;
                    };
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                }[];
                group?: string;
                kind?: string;
                name: string;
                namespace?: string;
                port?: number;
                weight?: number;
                [k: string]: unknown;
              }[];
              /**
               * @maxItems 16
               */
              filters?: {
                cors?: {
                  allowCredentials?: boolean;
                  /**
                   * @maxItems 64
                   */
                  allowHeaders?: string[];
                  /**
                   * @maxItems 9
                   */
                  allowMethods?: (
                    | 'GET'
                    | 'HEAD'
                    | 'POST'
                    | 'PUT'
                    | 'DELETE'
                    | 'CONNECT'
                    | 'OPTIONS'
                    | 'TRACE'
                    | 'PATCH'
                    | '*'
                  )[];
                  /**
                   * @maxItems 64
                   */
                  allowOrigins?: string[];
                  /**
                   * @maxItems 64
                   */
                  exposeHeaders?: string[];
                  maxAge?: number;
                  [k: string]: unknown;
                };
                extensionRef?: {
                  group: string;
                  kind: string;
                  name: string;
                  [k: string]: unknown;
                };
                externalAuth?: {
                  backendRef: {
                    group?: string;
                    kind?: string;
                    name: string;
                    namespace?: string;
                    port?: number;
                    [k: string]: unknown;
                  };
                  forwardBody?: {
                    maxSize?: number;
                    [k: string]: unknown;
                  };
                  grpc?: {
                    /**
                     * @maxItems 64
                     */
                    allowedHeaders?: string[];
                    [k: string]: unknown;
                  };
                  http?: {
                    /**
                     * @maxItems 64
                     */
                    allowedHeaders?: string[];
                    /**
                     * @maxItems 64
                     */
                    allowedResponseHeaders?: string[];
                    path?: string;
                    [k: string]: unknown;
                  };
                  protocol: 'HTTP' | 'GRPC';
                  [k: string]: unknown;
                };
                requestHeaderModifier?: {
                  /**
                   * @maxItems 16
                   */
                  add?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  /**
                   * @maxItems 16
                   */
                  remove?: string[];
                  /**
                   * @maxItems 16
                   */
                  set?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  [k: string]: unknown;
                };
                requestMirror?: {
                  backendRef: {
                    group?: string;
                    kind?: string;
                    name: string;
                    namespace?: string;
                    port?: number;
                    [k: string]: unknown;
                  };
                  fraction?: {
                    denominator?: number;
                    numerator: number;
                    [k: string]: unknown;
                  };
                  percent?: number;
                  [k: string]: unknown;
                };
                requestRedirect?: {
                  hostname?: string;
                  path?: {
                    replaceFullPath?: string;
                    replacePrefixMatch?: string;
                    type: 'ReplaceFullPath' | 'ReplacePrefixMatch';
                    [k: string]: unknown;
                  };
                  port?: number;
                  scheme?: 'http' | 'https';
                  statusCode?: 301 | 302;
                  [k: string]: unknown;
                };
                responseHeaderModifier?: {
                  /**
                   * @maxItems 16
                   */
                  add?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  /**
                   * @maxItems 16
                   */
                  remove?: string[];
                  /**
                   * @maxItems 16
                   */
                  set?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  [k: string]: unknown;
                };
                type:
                  | 'RequestHeaderModifier'
                  | 'ResponseHeaderModifier'
                  | 'RequestMirror'
                  | 'RequestRedirect'
                  | 'URLRewrite'
                  | 'ExtensionRef';
                urlRewrite?: {
                  hostname?: string;
                  path?: {
                    replaceFullPath?: string;
                    replacePrefixMatch?: string;
                    type: 'ReplaceFullPath' | 'ReplacePrefixMatch';
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              }[];
              /**
               * @maxItems 64
               */
              matches?: {
                /**
                 * @maxItems 16
                 */
                headers?: {
                  name: string;
                  type?: 'Exact' | 'RegularExpression';
                  value: string;
                  [k: string]: unknown;
                }[];
                method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
                path?: {
                  type?: 'Exact' | 'PathPrefix' | 'RegularExpression';
                  value?: string;
                  [k: string]: unknown;
                };
                /**
                 * @maxItems 16
                 */
                queryParams?: {
                  name: string;
                  type?: 'Exact' | 'RegularExpression';
                  value: string;
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              }[];
              name?: string;
              retry?: {
                attempts?: number;
                backoff?: string;
                codes?: number[];
                [k: string]: unknown;
              };
              sessionPersistence?: {
                absoluteTimeout?: string;
                cookieConfig?: {
                  lifetimeType?: 'Permanent' | 'Session';
                  [k: string]: unknown;
                };
                idleTimeout?: string;
                sessionName?: string;
                type?: 'Cookie' | 'Header';
                [k: string]: unknown;
              };
              timeouts?: {
                backendRequest?: string;
                request?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            useDefaultGateways?: 'All' | 'None';
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      scheduler?: {
        annotations?: {
          [k: string]: string;
        };
        config?: {
          inline?: {
            [k: string]: unknown;
          };
          ref?: {
            key: string;
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        labels?: {
          [k: string]: string;
        };
        pool?: {
          ref?: {
            name?: string;
            [k: string]: unknown;
          };
          spec?: {
            endpointPickerRef: {
              failureMode?: 'FailOpen' | 'FailClose';
              group?: string;
              kind?: string;
              name: string;
              port?: {
                number: number;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            selector: {
              matchLabels: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            /**
             * @minItems 1
             * @maxItems 8
             */
            targetPorts: {
              number: number;
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        replicas?: number;
        template?: {
          activeDeadlineSeconds?: number;
          affinity?: {
            nodeAffinity?: {
              preferredDuringSchedulingIgnoredDuringExecution?: {
                preference: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchFields?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  [k: string]: unknown;
                };
                weight: number;
                [k: string]: unknown;
              }[];
              requiredDuringSchedulingIgnoredDuringExecution?: {
                nodeSelectorTerms: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchFields?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  [k: string]: unknown;
                }[];
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            podAffinity?: {
              preferredDuringSchedulingIgnoredDuringExecution?: {
                podAffinityTerm: {
                  labelSelector?: {
                    matchExpressions?: {
                      key: string;
                      operator: string;
                      values?: string[];
                      [k: string]: unknown;
                    }[];
                    matchLabels?: {
                      [k: string]: string;
                    };
                    [k: string]: unknown;
                  };
                  matchLabelKeys?: string[];
                  mismatchLabelKeys?: string[];
                  namespaceSelector?: {
                    matchExpressions?: {
                      key: string;
                      operator: string;
                      values?: string[];
                      [k: string]: unknown;
                    }[];
                    matchLabels?: {
                      [k: string]: string;
                    };
                    [k: string]: unknown;
                  };
                  namespaces?: string[];
                  topologyKey: string;
                  [k: string]: unknown;
                };
                weight: number;
                [k: string]: unknown;
              }[];
              requiredDuringSchedulingIgnoredDuringExecution?: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                namespaceSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                namespaces?: string[];
                topologyKey: string;
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            podAntiAffinity?: {
              preferredDuringSchedulingIgnoredDuringExecution?: {
                podAffinityTerm: {
                  labelSelector?: {
                    matchExpressions?: {
                      key: string;
                      operator: string;
                      values?: string[];
                      [k: string]: unknown;
                    }[];
                    matchLabels?: {
                      [k: string]: string;
                    };
                    [k: string]: unknown;
                  };
                  matchLabelKeys?: string[];
                  mismatchLabelKeys?: string[];
                  namespaceSelector?: {
                    matchExpressions?: {
                      key: string;
                      operator: string;
                      values?: string[];
                      [k: string]: unknown;
                    }[];
                    matchLabels?: {
                      [k: string]: string;
                    };
                    [k: string]: unknown;
                  };
                  namespaces?: string[];
                  topologyKey: string;
                  [k: string]: unknown;
                };
                weight: number;
                [k: string]: unknown;
              }[];
              requiredDuringSchedulingIgnoredDuringExecution?: {
                labelSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                matchLabelKeys?: string[];
                mismatchLabelKeys?: string[];
                namespaceSelector?: {
                  matchExpressions?: {
                    key: string;
                    operator: string;
                    values?: string[];
                    [k: string]: unknown;
                  }[];
                  matchLabels?: {
                    [k: string]: string;
                  };
                  [k: string]: unknown;
                };
                namespaces?: string[];
                topologyKey: string;
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          automountServiceAccountToken?: boolean;
          containers?: {
            args?: string[];
            command?: string[];
            env?: {
              name: string;
              value?: string;
              valueFrom?: {
                configMapKeyRef?: {
                  key: string;
                  name?: string;
                  optional?: boolean;
                  [k: string]: unknown;
                };
                fieldRef?: {
                  apiVersion?: string;
                  fieldPath: string;
                  [k: string]: unknown;
                };
                fileKeyRef?: {
                  key: string;
                  optional?: boolean;
                  path: string;
                  volumeName: string;
                  [k: string]: unknown;
                };
                resourceFieldRef?: {
                  containerName?: string;
                  divisor?: number | string;
                  resource: string;
                  [k: string]: unknown;
                };
                secretKeyRef?: {
                  key: string;
                  name?: string;
                  optional?: boolean;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            envFrom?: {
              configMapRef?: {
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              prefix?: string;
              secretRef?: {
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            image?: string;
            imagePullPolicy?: string;
            lifecycle?: {
              postStart?: {
                exec?: {
                  command?: string[];
                  [k: string]: unknown;
                };
                httpGet?: {
                  host?: string;
                  httpHeaders?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  path?: string;
                  port: number | string;
                  scheme?: string;
                  [k: string]: unknown;
                };
                sleep?: {
                  seconds: number;
                  [k: string]: unknown;
                };
                tcpSocket?: {
                  host?: string;
                  port: number | string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              preStop?: {
                exec?: {
                  command?: string[];
                  [k: string]: unknown;
                };
                httpGet?: {
                  host?: string;
                  httpHeaders?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  path?: string;
                  port: number | string;
                  scheme?: string;
                  [k: string]: unknown;
                };
                sleep?: {
                  seconds: number;
                  [k: string]: unknown;
                };
                tcpSocket?: {
                  host?: string;
                  port: number | string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              stopSignal?: string;
              [k: string]: unknown;
            };
            livenessProbe?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              failureThreshold?: number;
              grpc?: {
                port: number;
                service?: string;
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              initialDelaySeconds?: number;
              periodSeconds?: number;
              successThreshold?: number;
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              terminationGracePeriodSeconds?: number;
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            name: string;
            ports?: {
              containerPort: number;
              hostIP?: string;
              hostPort?: number;
              name?: string;
              protocol?: string;
              [k: string]: unknown;
            }[];
            readinessProbe?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              failureThreshold?: number;
              grpc?: {
                port: number;
                service?: string;
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              initialDelaySeconds?: number;
              periodSeconds?: number;
              successThreshold?: number;
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              terminationGracePeriodSeconds?: number;
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            resizePolicy?: {
              resourceName: string;
              restartPolicy: string;
              [k: string]: unknown;
            }[];
            resources?: {
              claims?: {
                name: string;
                request?: string;
                [k: string]: unknown;
              }[];
              limits?: {
                [k: string]: number | string;
              };
              requests?: {
                [k: string]: number | string;
              };
              [k: string]: unknown;
            };
            restartPolicy?: string;
            restartPolicyRules?: {
              action: string;
              exitCodes?: {
                operator: string;
                values?: number[];
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            securityContext?: {
              allowPrivilegeEscalation?: boolean;
              appArmorProfile?: {
                localhostProfile?: string;
                type: string;
                [k: string]: unknown;
              };
              capabilities?: {
                add?: string[];
                drop?: string[];
                [k: string]: unknown;
              };
              privileged?: boolean;
              procMount?: string;
              readOnlyRootFilesystem?: boolean;
              runAsGroup?: number;
              runAsNonRoot?: boolean;
              runAsUser?: number;
              seLinuxOptions?: {
                level?: string;
                role?: string;
                type?: string;
                user?: string;
                [k: string]: unknown;
              };
              seccompProfile?: {
                localhostProfile?: string;
                type: string;
                [k: string]: unknown;
              };
              windowsOptions?: {
                gmsaCredentialSpec?: string;
                gmsaCredentialSpecName?: string;
                hostProcess?: boolean;
                runAsUserName?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            startupProbe?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              failureThreshold?: number;
              grpc?: {
                port: number;
                service?: string;
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              initialDelaySeconds?: number;
              periodSeconds?: number;
              successThreshold?: number;
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              terminationGracePeriodSeconds?: number;
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            stdin?: boolean;
            stdinOnce?: boolean;
            terminationMessagePath?: string;
            terminationMessagePolicy?: string;
            tty?: boolean;
            volumeDevices?: {
              devicePath: string;
              name: string;
              [k: string]: unknown;
            }[];
            volumeMounts?: {
              mountPath: string;
              mountPropagation?: string;
              name: string;
              readOnly?: boolean;
              recursiveReadOnly?: string;
              subPath?: string;
              subPathExpr?: string;
              [k: string]: unknown;
            }[];
            workingDir?: string;
            [k: string]: unknown;
          }[];
          dnsConfig?: {
            nameservers?: string[];
            options?: {
              name?: string;
              value?: string;
              [k: string]: unknown;
            }[];
            searches?: string[];
            [k: string]: unknown;
          };
          dnsPolicy?: string;
          enableServiceLinks?: boolean;
          ephemeralContainers?: {
            args?: string[];
            command?: string[];
            env?: {
              name: string;
              value?: string;
              valueFrom?: {
                configMapKeyRef?: {
                  key: string;
                  name?: string;
                  optional?: boolean;
                  [k: string]: unknown;
                };
                fieldRef?: {
                  apiVersion?: string;
                  fieldPath: string;
                  [k: string]: unknown;
                };
                fileKeyRef?: {
                  key: string;
                  optional?: boolean;
                  path: string;
                  volumeName: string;
                  [k: string]: unknown;
                };
                resourceFieldRef?: {
                  containerName?: string;
                  divisor?: number | string;
                  resource: string;
                  [k: string]: unknown;
                };
                secretKeyRef?: {
                  key: string;
                  name?: string;
                  optional?: boolean;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            envFrom?: {
              configMapRef?: {
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              prefix?: string;
              secretRef?: {
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            image?: string;
            imagePullPolicy?: string;
            lifecycle?: {
              postStart?: {
                exec?: {
                  command?: string[];
                  [k: string]: unknown;
                };
                httpGet?: {
                  host?: string;
                  httpHeaders?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  path?: string;
                  port: number | string;
                  scheme?: string;
                  [k: string]: unknown;
                };
                sleep?: {
                  seconds: number;
                  [k: string]: unknown;
                };
                tcpSocket?: {
                  host?: string;
                  port: number | string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              preStop?: {
                exec?: {
                  command?: string[];
                  [k: string]: unknown;
                };
                httpGet?: {
                  host?: string;
                  httpHeaders?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  path?: string;
                  port: number | string;
                  scheme?: string;
                  [k: string]: unknown;
                };
                sleep?: {
                  seconds: number;
                  [k: string]: unknown;
                };
                tcpSocket?: {
                  host?: string;
                  port: number | string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              stopSignal?: string;
              [k: string]: unknown;
            };
            livenessProbe?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              failureThreshold?: number;
              grpc?: {
                port: number;
                service?: string;
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              initialDelaySeconds?: number;
              periodSeconds?: number;
              successThreshold?: number;
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              terminationGracePeriodSeconds?: number;
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            name: string;
            ports?: {
              containerPort: number;
              hostIP?: string;
              hostPort?: number;
              name?: string;
              protocol?: string;
              [k: string]: unknown;
            }[];
            readinessProbe?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              failureThreshold?: number;
              grpc?: {
                port: number;
                service?: string;
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              initialDelaySeconds?: number;
              periodSeconds?: number;
              successThreshold?: number;
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              terminationGracePeriodSeconds?: number;
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            resizePolicy?: {
              resourceName: string;
              restartPolicy: string;
              [k: string]: unknown;
            }[];
            resources?: {
              claims?: {
                name: string;
                request?: string;
                [k: string]: unknown;
              }[];
              limits?: {
                [k: string]: number | string;
              };
              requests?: {
                [k: string]: number | string;
              };
              [k: string]: unknown;
            };
            restartPolicy?: string;
            restartPolicyRules?: {
              action: string;
              exitCodes?: {
                operator: string;
                values?: number[];
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            securityContext?: {
              allowPrivilegeEscalation?: boolean;
              appArmorProfile?: {
                localhostProfile?: string;
                type: string;
                [k: string]: unknown;
              };
              capabilities?: {
                add?: string[];
                drop?: string[];
                [k: string]: unknown;
              };
              privileged?: boolean;
              procMount?: string;
              readOnlyRootFilesystem?: boolean;
              runAsGroup?: number;
              runAsNonRoot?: boolean;
              runAsUser?: number;
              seLinuxOptions?: {
                level?: string;
                role?: string;
                type?: string;
                user?: string;
                [k: string]: unknown;
              };
              seccompProfile?: {
                localhostProfile?: string;
                type: string;
                [k: string]: unknown;
              };
              windowsOptions?: {
                gmsaCredentialSpec?: string;
                gmsaCredentialSpecName?: string;
                hostProcess?: boolean;
                runAsUserName?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            startupProbe?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              failureThreshold?: number;
              grpc?: {
                port: number;
                service?: string;
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              initialDelaySeconds?: number;
              periodSeconds?: number;
              successThreshold?: number;
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              terminationGracePeriodSeconds?: number;
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            stdin?: boolean;
            stdinOnce?: boolean;
            targetContainerName?: string;
            terminationMessagePath?: string;
            terminationMessagePolicy?: string;
            tty?: boolean;
            volumeDevices?: {
              devicePath: string;
              name: string;
              [k: string]: unknown;
            }[];
            volumeMounts?: {
              mountPath: string;
              mountPropagation?: string;
              name: string;
              readOnly?: boolean;
              recursiveReadOnly?: string;
              subPath?: string;
              subPathExpr?: string;
              [k: string]: unknown;
            }[];
            workingDir?: string;
            [k: string]: unknown;
          }[];
          hostAliases?: {
            hostnames?: string[];
            ip: string;
            [k: string]: unknown;
          }[];
          hostIPC?: boolean;
          hostNetwork?: boolean;
          hostPID?: boolean;
          hostUsers?: boolean;
          hostname?: string;
          hostnameOverride?: string;
          imagePullSecrets?: {
            name?: string;
            [k: string]: unknown;
          }[];
          initContainers?: {
            args?: string[];
            command?: string[];
            env?: {
              name: string;
              value?: string;
              valueFrom?: {
                configMapKeyRef?: {
                  key: string;
                  name?: string;
                  optional?: boolean;
                  [k: string]: unknown;
                };
                fieldRef?: {
                  apiVersion?: string;
                  fieldPath: string;
                  [k: string]: unknown;
                };
                fileKeyRef?: {
                  key: string;
                  optional?: boolean;
                  path: string;
                  volumeName: string;
                  [k: string]: unknown;
                };
                resourceFieldRef?: {
                  containerName?: string;
                  divisor?: number | string;
                  resource: string;
                  [k: string]: unknown;
                };
                secretKeyRef?: {
                  key: string;
                  name?: string;
                  optional?: boolean;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            envFrom?: {
              configMapRef?: {
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              prefix?: string;
              secretRef?: {
                name?: string;
                optional?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            image?: string;
            imagePullPolicy?: string;
            lifecycle?: {
              postStart?: {
                exec?: {
                  command?: string[];
                  [k: string]: unknown;
                };
                httpGet?: {
                  host?: string;
                  httpHeaders?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  path?: string;
                  port: number | string;
                  scheme?: string;
                  [k: string]: unknown;
                };
                sleep?: {
                  seconds: number;
                  [k: string]: unknown;
                };
                tcpSocket?: {
                  host?: string;
                  port: number | string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              preStop?: {
                exec?: {
                  command?: string[];
                  [k: string]: unknown;
                };
                httpGet?: {
                  host?: string;
                  httpHeaders?: {
                    name: string;
                    value: string;
                    [k: string]: unknown;
                  }[];
                  path?: string;
                  port: number | string;
                  scheme?: string;
                  [k: string]: unknown;
                };
                sleep?: {
                  seconds: number;
                  [k: string]: unknown;
                };
                tcpSocket?: {
                  host?: string;
                  port: number | string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              stopSignal?: string;
              [k: string]: unknown;
            };
            livenessProbe?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              failureThreshold?: number;
              grpc?: {
                port: number;
                service?: string;
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              initialDelaySeconds?: number;
              periodSeconds?: number;
              successThreshold?: number;
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              terminationGracePeriodSeconds?: number;
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            name: string;
            ports?: {
              containerPort: number;
              hostIP?: string;
              hostPort?: number;
              name?: string;
              protocol?: string;
              [k: string]: unknown;
            }[];
            readinessProbe?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              failureThreshold?: number;
              grpc?: {
                port: number;
                service?: string;
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              initialDelaySeconds?: number;
              periodSeconds?: number;
              successThreshold?: number;
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              terminationGracePeriodSeconds?: number;
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            resizePolicy?: {
              resourceName: string;
              restartPolicy: string;
              [k: string]: unknown;
            }[];
            resources?: {
              claims?: {
                name: string;
                request?: string;
                [k: string]: unknown;
              }[];
              limits?: {
                [k: string]: number | string;
              };
              requests?: {
                [k: string]: number | string;
              };
              [k: string]: unknown;
            };
            restartPolicy?: string;
            restartPolicyRules?: {
              action: string;
              exitCodes?: {
                operator: string;
                values?: number[];
                [k: string]: unknown;
              };
              [k: string]: unknown;
            }[];
            securityContext?: {
              allowPrivilegeEscalation?: boolean;
              appArmorProfile?: {
                localhostProfile?: string;
                type: string;
                [k: string]: unknown;
              };
              capabilities?: {
                add?: string[];
                drop?: string[];
                [k: string]: unknown;
              };
              privileged?: boolean;
              procMount?: string;
              readOnlyRootFilesystem?: boolean;
              runAsGroup?: number;
              runAsNonRoot?: boolean;
              runAsUser?: number;
              seLinuxOptions?: {
                level?: string;
                role?: string;
                type?: string;
                user?: string;
                [k: string]: unknown;
              };
              seccompProfile?: {
                localhostProfile?: string;
                type: string;
                [k: string]: unknown;
              };
              windowsOptions?: {
                gmsaCredentialSpec?: string;
                gmsaCredentialSpecName?: string;
                hostProcess?: boolean;
                runAsUserName?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            startupProbe?: {
              exec?: {
                command?: string[];
                [k: string]: unknown;
              };
              failureThreshold?: number;
              grpc?: {
                port: number;
                service?: string;
                [k: string]: unknown;
              };
              httpGet?: {
                host?: string;
                httpHeaders?: {
                  name: string;
                  value: string;
                  [k: string]: unknown;
                }[];
                path?: string;
                port: number | string;
                scheme?: string;
                [k: string]: unknown;
              };
              initialDelaySeconds?: number;
              periodSeconds?: number;
              successThreshold?: number;
              tcpSocket?: {
                host?: string;
                port: number | string;
                [k: string]: unknown;
              };
              terminationGracePeriodSeconds?: number;
              timeoutSeconds?: number;
              [k: string]: unknown;
            };
            stdin?: boolean;
            stdinOnce?: boolean;
            terminationMessagePath?: string;
            terminationMessagePolicy?: string;
            tty?: boolean;
            volumeDevices?: {
              devicePath: string;
              name: string;
              [k: string]: unknown;
            }[];
            volumeMounts?: {
              mountPath: string;
              mountPropagation?: string;
              name: string;
              readOnly?: boolean;
              recursiveReadOnly?: string;
              subPath?: string;
              subPathExpr?: string;
              [k: string]: unknown;
            }[];
            workingDir?: string;
            [k: string]: unknown;
          }[];
          nodeName?: string;
          nodeSelector?: {
            [k: string]: string;
          };
          os?: {
            name: string;
            [k: string]: unknown;
          };
          overhead?: {
            [k: string]: number | string;
          };
          preemptionPolicy?: string;
          priority?: number;
          priorityClassName?: string;
          readinessGates?: {
            conditionType: string;
            [k: string]: unknown;
          }[];
          resourceClaims?: {
            name: string;
            resourceClaimName?: string;
            resourceClaimTemplateName?: string;
            [k: string]: unknown;
          }[];
          resources?: {
            claims?: {
              name: string;
              request?: string;
              [k: string]: unknown;
            }[];
            limits?: {
              [k: string]: number | string;
            };
            requests?: {
              [k: string]: number | string;
            };
            [k: string]: unknown;
          };
          restartPolicy?: string;
          runtimeClassName?: string;
          schedulerName?: string;
          schedulingGates?: {
            name: string;
            [k: string]: unknown;
          }[];
          securityContext?: {
            appArmorProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            fsGroup?: number;
            fsGroupChangePolicy?: string;
            runAsGroup?: number;
            runAsNonRoot?: boolean;
            runAsUser?: number;
            seLinuxChangePolicy?: string;
            seLinuxOptions?: {
              level?: string;
              role?: string;
              type?: string;
              user?: string;
              [k: string]: unknown;
            };
            seccompProfile?: {
              localhostProfile?: string;
              type: string;
              [k: string]: unknown;
            };
            supplementalGroups?: number[];
            supplementalGroupsPolicy?: string;
            sysctls?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            windowsOptions?: {
              gmsaCredentialSpec?: string;
              gmsaCredentialSpecName?: string;
              hostProcess?: boolean;
              runAsUserName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          serviceAccount?: string;
          serviceAccountName?: string;
          setHostnameAsFQDN?: boolean;
          shareProcessNamespace?: boolean;
          subdomain?: string;
          terminationGracePeriodSeconds?: number;
          tolerations?: {
            effect?: string;
            key?: string;
            operator?: string;
            tolerationSeconds?: number;
            value?: string;
            [k: string]: unknown;
          }[];
          topologySpreadConstraints?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            matchLabelKeys?: string[];
            maxSkew: number;
            minDomains?: number;
            nodeAffinityPolicy?: string;
            nodeTaintsPolicy?: string;
            topologyKey: string;
            whenUnsatisfiable: string;
            [k: string]: unknown;
          }[];
          volumes?: {
            awsElasticBlockStore?: {
              fsType?: string;
              partition?: number;
              readOnly?: boolean;
              volumeID: string;
              [k: string]: unknown;
            };
            azureDisk?: {
              cachingMode?: string;
              diskName: string;
              diskURI: string;
              fsType?: string;
              kind?: string;
              readOnly?: boolean;
              [k: string]: unknown;
            };
            azureFile?: {
              readOnly?: boolean;
              secretName: string;
              shareName: string;
              [k: string]: unknown;
            };
            cephfs?: {
              monitors: string[];
              path?: string;
              readOnly?: boolean;
              secretFile?: string;
              secretRef?: {
                name?: string;
                [k: string]: unknown;
              };
              user?: string;
              [k: string]: unknown;
            };
            cinder?: {
              fsType?: string;
              readOnly?: boolean;
              secretRef?: {
                name?: string;
                [k: string]: unknown;
              };
              volumeID: string;
              [k: string]: unknown;
            };
            configMap?: {
              defaultMode?: number;
              items?: {
                key: string;
                mode?: number;
                path: string;
                [k: string]: unknown;
              }[];
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            csi?: {
              driver: string;
              fsType?: string;
              nodePublishSecretRef?: {
                name?: string;
                [k: string]: unknown;
              };
              readOnly?: boolean;
              volumeAttributes?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            downwardAPI?: {
              defaultMode?: number;
              items?: {
                fieldRef?: {
                  apiVersion?: string;
                  fieldPath: string;
                  [k: string]: unknown;
                };
                mode?: number;
                path: string;
                resourceFieldRef?: {
                  containerName?: string;
                  divisor?: number | string;
                  resource: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            emptyDir?: {
              medium?: string;
              sizeLimit?: number | string;
              [k: string]: unknown;
            };
            ephemeral?: {
              volumeClaimTemplate?: {
                metadata?: {
                  [k: string]: unknown;
                };
                spec: {
                  accessModes?: string[];
                  dataSource?: {
                    apiGroup?: string;
                    kind: string;
                    name: string;
                    [k: string]: unknown;
                  };
                  dataSourceRef?: {
                    apiGroup?: string;
                    kind: string;
                    name: string;
                    namespace?: string;
                    [k: string]: unknown;
                  };
                  resources?: {
                    limits?: {
                      [k: string]: number | string;
                    };
                    requests?: {
                      [k: string]: number | string;
                    };
                    [k: string]: unknown;
                  };
                  selector?: {
                    matchExpressions?: {
                      key: string;
                      operator: string;
                      values?: string[];
                      [k: string]: unknown;
                    }[];
                    matchLabels?: {
                      [k: string]: string;
                    };
                    [k: string]: unknown;
                  };
                  storageClassName?: string;
                  volumeAttributesClassName?: string;
                  volumeMode?: string;
                  volumeName?: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            fc?: {
              fsType?: string;
              lun?: number;
              readOnly?: boolean;
              targetWWNs?: string[];
              wwids?: string[];
              [k: string]: unknown;
            };
            flexVolume?: {
              driver: string;
              fsType?: string;
              options?: {
                [k: string]: string;
              };
              readOnly?: boolean;
              secretRef?: {
                name?: string;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            flocker?: {
              datasetName?: string;
              datasetUUID?: string;
              [k: string]: unknown;
            };
            gcePersistentDisk?: {
              fsType?: string;
              partition?: number;
              pdName: string;
              readOnly?: boolean;
              [k: string]: unknown;
            };
            gitRepo?: {
              directory?: string;
              repository: string;
              revision?: string;
              [k: string]: unknown;
            };
            glusterfs?: {
              endpoints: string;
              path: string;
              readOnly?: boolean;
              [k: string]: unknown;
            };
            hostPath?: {
              path: string;
              type?: string;
              [k: string]: unknown;
            };
            image?: {
              pullPolicy?: string;
              reference?: string;
              [k: string]: unknown;
            };
            iscsi?: {
              chapAuthDiscovery?: boolean;
              chapAuthSession?: boolean;
              fsType?: string;
              initiatorName?: string;
              iqn: string;
              iscsiInterface?: string;
              lun: number;
              portals?: string[];
              readOnly?: boolean;
              secretRef?: {
                name?: string;
                [k: string]: unknown;
              };
              targetPortal: string;
              [k: string]: unknown;
            };
            name: string;
            nfs?: {
              path: string;
              readOnly?: boolean;
              server: string;
              [k: string]: unknown;
            };
            persistentVolumeClaim?: {
              claimName: string;
              readOnly?: boolean;
              [k: string]: unknown;
            };
            photonPersistentDisk?: {
              fsType?: string;
              pdID: string;
              [k: string]: unknown;
            };
            portworxVolume?: {
              fsType?: string;
              readOnly?: boolean;
              volumeID: string;
              [k: string]: unknown;
            };
            projected?: {
              defaultMode?: number;
              sources?: {
                clusterTrustBundle?: {
                  labelSelector?: {
                    matchExpressions?: {
                      key: string;
                      operator: string;
                      values?: string[];
                      [k: string]: unknown;
                    }[];
                    matchLabels?: {
                      [k: string]: string;
                    };
                    [k: string]: unknown;
                  };
                  name?: string;
                  optional?: boolean;
                  path: string;
                  signerName?: string;
                  [k: string]: unknown;
                };
                configMap?: {
                  items?: {
                    key: string;
                    mode?: number;
                    path: string;
                    [k: string]: unknown;
                  }[];
                  name?: string;
                  optional?: boolean;
                  [k: string]: unknown;
                };
                downwardAPI?: {
                  items?: {
                    fieldRef?: {
                      apiVersion?: string;
                      fieldPath: string;
                      [k: string]: unknown;
                    };
                    mode?: number;
                    path: string;
                    resourceFieldRef?: {
                      containerName?: string;
                      divisor?: number | string;
                      resource: string;
                      [k: string]: unknown;
                    };
                    [k: string]: unknown;
                  }[];
                  [k: string]: unknown;
                };
                podCertificate?: {
                  certificateChainPath?: string;
                  credentialBundlePath?: string;
                  keyPath?: string;
                  keyType: string;
                  maxExpirationSeconds?: number;
                  signerName: string;
                  [k: string]: unknown;
                };
                secret?: {
                  items?: {
                    key: string;
                    mode?: number;
                    path: string;
                    [k: string]: unknown;
                  }[];
                  name?: string;
                  optional?: boolean;
                  [k: string]: unknown;
                };
                serviceAccountToken?: {
                  audience?: string;
                  expirationSeconds?: number;
                  path: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            quobyte?: {
              group?: string;
              readOnly?: boolean;
              registry: string;
              tenant?: string;
              user?: string;
              volume: string;
              [k: string]: unknown;
            };
            rbd?: {
              fsType?: string;
              image: string;
              keyring?: string;
              monitors: string[];
              pool?: string;
              readOnly?: boolean;
              secretRef?: {
                name?: string;
                [k: string]: unknown;
              };
              user?: string;
              [k: string]: unknown;
            };
            scaleIO?: {
              fsType?: string;
              gateway: string;
              protectionDomain?: string;
              readOnly?: boolean;
              secretRef: {
                name?: string;
                [k: string]: unknown;
              };
              sslEnabled?: boolean;
              storageMode?: string;
              storagePool?: string;
              system: string;
              volumeName?: string;
              [k: string]: unknown;
            };
            secret?: {
              defaultMode?: number;
              items?: {
                key: string;
                mode?: number;
                path: string;
                [k: string]: unknown;
              }[];
              optional?: boolean;
              secretName?: string;
              [k: string]: unknown;
            };
            storageos?: {
              fsType?: string;
              readOnly?: boolean;
              secretRef?: {
                name?: string;
                [k: string]: unknown;
              };
              volumeName?: string;
              volumeNamespace?: string;
              [k: string]: unknown;
            };
            vsphereVolume?: {
              fsType?: string;
              storagePolicyID?: string;
              storagePolicyName?: string;
              volumePath: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    scaling?: {
      maxReplicas: number;
      minReplicas?: number;
      wva?: {
        hpa?: {
          behavior?: {
            scaleDown?: {
              policies?: {
                periodSeconds: number;
                type: string;
                value: number;
                [k: string]: unknown;
              }[];
              selectPolicy?: string;
              stabilizationWindowSeconds?: number;
              tolerance?: number | string;
              [k: string]: unknown;
            };
            scaleUp?: {
              policies?: {
                periodSeconds: number;
                type: string;
                value: number;
                [k: string]: unknown;
              }[];
              selectPolicy?: string;
              stabilizationWindowSeconds?: number;
              tolerance?: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        keda?: {
          advanced?: {
            horizontalPodAutoscalerConfig?: {
              behavior?: {
                scaleDown?: {
                  policies?: {
                    periodSeconds: number;
                    type: string;
                    value: number;
                    [k: string]: unknown;
                  }[];
                  selectPolicy?: string;
                  stabilizationWindowSeconds?: number;
                  tolerance?: number | string;
                  [k: string]: unknown;
                };
                scaleUp?: {
                  policies?: {
                    periodSeconds: number;
                    type: string;
                    value: number;
                    [k: string]: unknown;
                  }[];
                  selectPolicy?: string;
                  stabilizationWindowSeconds?: number;
                  tolerance?: number | string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              };
              name?: string;
              [k: string]: unknown;
            };
            restoreToOriginalReplicaCount?: boolean;
            scalingModifiers?: {
              activationTarget?: string;
              formula?: string;
              metricType?: 'AverageValue' | 'Value';
              target?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          cooldownPeriod?: number;
          fallback?: {
            behavior?: 'static' | 'currentReplicas' | 'currentReplicasIfHigher' | 'currentReplicasIfLower';
            failureThreshold: number;
            replicas: number;
            [k: string]: unknown;
          };
          idleReplicaCount?: number;
          initialCooldownPeriod?: number;
          pollingInterval?: number;
          [k: string]: unknown;
        };
        variantCost?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    storageInitializer?: {
      enabled?: boolean;
      [k: string]: unknown;
    };
    template?: {
      activeDeadlineSeconds?: number;
      affinity?: {
        nodeAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            preference: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            weight: number;
            [k: string]: unknown;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        podAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            podAffinityTerm: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            };
            weight: number;
            [k: string]: unknown;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            namespaces?: string[];
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        podAntiAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            podAffinityTerm: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            };
            weight: number;
            [k: string]: unknown;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            namespaces?: string[];
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      automountServiceAccountToken?: boolean;
      containers?: {
        args?: string[];
        command?: string[];
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
              [k: string]: unknown;
            };
            fileKeyRef?: {
              key: string;
              optional?: boolean;
              path: string;
              volumeName: string;
              [k: string]: unknown;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
              [k: string]: unknown;
            };
            secretKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        envFrom?: {
          configMapRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          prefix?: string;
          secretRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        image?: string;
        imagePullPolicy?: string;
        lifecycle?: {
          postStart?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          preStop?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          stopSignal?: string;
          [k: string]: unknown;
        };
        livenessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        name: string;
        ports?: {
          containerPort: number;
          hostIP?: string;
          hostPort?: number;
          name?: string;
          protocol?: string;
          [k: string]: unknown;
        }[];
        readinessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        resizePolicy?: {
          resourceName: string;
          restartPolicy: string;
          [k: string]: unknown;
        }[];
        resources?: {
          claims?: {
            name: string;
            request?: string;
            [k: string]: unknown;
          }[];
          limits?: {
            [k: string]: number | string;
          };
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        restartPolicy?: string;
        restartPolicyRules?: {
          action: string;
          exitCodes?: {
            operator: string;
            values?: number[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        securityContext?: {
          allowPrivilegeEscalation?: boolean;
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          capabilities?: {
            add?: string[];
            drop?: string[];
            [k: string]: unknown;
          };
          privileged?: boolean;
          procMount?: string;
          readOnlyRootFilesystem?: boolean;
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          runAsUser?: number;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
            [k: string]: unknown;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        startupProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        stdin?: boolean;
        stdinOnce?: boolean;
        terminationMessagePath?: string;
        terminationMessagePolicy?: string;
        tty?: boolean;
        volumeDevices?: {
          devicePath: string;
          name: string;
          [k: string]: unknown;
        }[];
        volumeMounts?: {
          mountPath: string;
          mountPropagation?: string;
          name: string;
          readOnly?: boolean;
          recursiveReadOnly?: string;
          subPath?: string;
          subPathExpr?: string;
          [k: string]: unknown;
        }[];
        workingDir?: string;
        [k: string]: unknown;
      }[];
      dnsConfig?: {
        nameservers?: string[];
        options?: {
          name?: string;
          value?: string;
          [k: string]: unknown;
        }[];
        searches?: string[];
        [k: string]: unknown;
      };
      dnsPolicy?: string;
      enableServiceLinks?: boolean;
      ephemeralContainers?: {
        args?: string[];
        command?: string[];
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
              [k: string]: unknown;
            };
            fileKeyRef?: {
              key: string;
              optional?: boolean;
              path: string;
              volumeName: string;
              [k: string]: unknown;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
              [k: string]: unknown;
            };
            secretKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        envFrom?: {
          configMapRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          prefix?: string;
          secretRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        image?: string;
        imagePullPolicy?: string;
        lifecycle?: {
          postStart?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          preStop?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          stopSignal?: string;
          [k: string]: unknown;
        };
        livenessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        name: string;
        ports?: {
          containerPort: number;
          hostIP?: string;
          hostPort?: number;
          name?: string;
          protocol?: string;
          [k: string]: unknown;
        }[];
        readinessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        resizePolicy?: {
          resourceName: string;
          restartPolicy: string;
          [k: string]: unknown;
        }[];
        resources?: {
          claims?: {
            name: string;
            request?: string;
            [k: string]: unknown;
          }[];
          limits?: {
            [k: string]: number | string;
          };
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        restartPolicy?: string;
        restartPolicyRules?: {
          action: string;
          exitCodes?: {
            operator: string;
            values?: number[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        securityContext?: {
          allowPrivilegeEscalation?: boolean;
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          capabilities?: {
            add?: string[];
            drop?: string[];
            [k: string]: unknown;
          };
          privileged?: boolean;
          procMount?: string;
          readOnlyRootFilesystem?: boolean;
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          runAsUser?: number;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
            [k: string]: unknown;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        startupProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        stdin?: boolean;
        stdinOnce?: boolean;
        targetContainerName?: string;
        terminationMessagePath?: string;
        terminationMessagePolicy?: string;
        tty?: boolean;
        volumeDevices?: {
          devicePath: string;
          name: string;
          [k: string]: unknown;
        }[];
        volumeMounts?: {
          mountPath: string;
          mountPropagation?: string;
          name: string;
          readOnly?: boolean;
          recursiveReadOnly?: string;
          subPath?: string;
          subPathExpr?: string;
          [k: string]: unknown;
        }[];
        workingDir?: string;
        [k: string]: unknown;
      }[];
      hostAliases?: {
        hostnames?: string[];
        ip: string;
        [k: string]: unknown;
      }[];
      hostIPC?: boolean;
      hostNetwork?: boolean;
      hostPID?: boolean;
      hostUsers?: boolean;
      hostname?: string;
      hostnameOverride?: string;
      imagePullSecrets?: {
        name?: string;
        [k: string]: unknown;
      }[];
      initContainers?: {
        args?: string[];
        command?: string[];
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
              [k: string]: unknown;
            };
            fileKeyRef?: {
              key: string;
              optional?: boolean;
              path: string;
              volumeName: string;
              [k: string]: unknown;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
              [k: string]: unknown;
            };
            secretKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        envFrom?: {
          configMapRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          prefix?: string;
          secretRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        image?: string;
        imagePullPolicy?: string;
        lifecycle?: {
          postStart?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          preStop?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          stopSignal?: string;
          [k: string]: unknown;
        };
        livenessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        name: string;
        ports?: {
          containerPort: number;
          hostIP?: string;
          hostPort?: number;
          name?: string;
          protocol?: string;
          [k: string]: unknown;
        }[];
        readinessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        resizePolicy?: {
          resourceName: string;
          restartPolicy: string;
          [k: string]: unknown;
        }[];
        resources?: {
          claims?: {
            name: string;
            request?: string;
            [k: string]: unknown;
          }[];
          limits?: {
            [k: string]: number | string;
          };
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        restartPolicy?: string;
        restartPolicyRules?: {
          action: string;
          exitCodes?: {
            operator: string;
            values?: number[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        securityContext?: {
          allowPrivilegeEscalation?: boolean;
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          capabilities?: {
            add?: string[];
            drop?: string[];
            [k: string]: unknown;
          };
          privileged?: boolean;
          procMount?: string;
          readOnlyRootFilesystem?: boolean;
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          runAsUser?: number;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
            [k: string]: unknown;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        startupProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        stdin?: boolean;
        stdinOnce?: boolean;
        terminationMessagePath?: string;
        terminationMessagePolicy?: string;
        tty?: boolean;
        volumeDevices?: {
          devicePath: string;
          name: string;
          [k: string]: unknown;
        }[];
        volumeMounts?: {
          mountPath: string;
          mountPropagation?: string;
          name: string;
          readOnly?: boolean;
          recursiveReadOnly?: string;
          subPath?: string;
          subPathExpr?: string;
          [k: string]: unknown;
        }[];
        workingDir?: string;
        [k: string]: unknown;
      }[];
      nodeName?: string;
      nodeSelector?: {
        [k: string]: string;
      };
      os?: {
        name: string;
        [k: string]: unknown;
      };
      overhead?: {
        [k: string]: number | string;
      };
      preemptionPolicy?: string;
      priority?: number;
      priorityClassName?: string;
      readinessGates?: {
        conditionType: string;
        [k: string]: unknown;
      }[];
      resourceClaims?: {
        name: string;
        resourceClaimName?: string;
        resourceClaimTemplateName?: string;
        [k: string]: unknown;
      }[];
      resources?: {
        claims?: {
          name: string;
          request?: string;
          [k: string]: unknown;
        }[];
        limits?: {
          [k: string]: number | string;
        };
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: unknown;
      };
      restartPolicy?: string;
      runtimeClassName?: string;
      schedulerName?: string;
      schedulingGates?: {
        name: string;
        [k: string]: unknown;
      }[];
      securityContext?: {
        appArmorProfile?: {
          localhostProfile?: string;
          type: string;
          [k: string]: unknown;
        };
        fsGroup?: number;
        fsGroupChangePolicy?: string;
        runAsGroup?: number;
        runAsNonRoot?: boolean;
        runAsUser?: number;
        seLinuxChangePolicy?: string;
        seLinuxOptions?: {
          level?: string;
          role?: string;
          type?: string;
          user?: string;
          [k: string]: unknown;
        };
        seccompProfile?: {
          localhostProfile?: string;
          type: string;
          [k: string]: unknown;
        };
        supplementalGroups?: number[];
        supplementalGroupsPolicy?: string;
        sysctls?: {
          name: string;
          value: string;
          [k: string]: unknown;
        }[];
        windowsOptions?: {
          gmsaCredentialSpec?: string;
          gmsaCredentialSpecName?: string;
          hostProcess?: boolean;
          runAsUserName?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      serviceAccount?: string;
      serviceAccountName?: string;
      setHostnameAsFQDN?: boolean;
      shareProcessNamespace?: boolean;
      subdomain?: string;
      terminationGracePeriodSeconds?: number;
      tolerations?: {
        effect?: string;
        key?: string;
        operator?: string;
        tolerationSeconds?: number;
        value?: string;
        [k: string]: unknown;
      }[];
      topologySpreadConstraints?: {
        labelSelector?: {
          matchExpressions?: {
            key: string;
            operator: string;
            values?: string[];
            [k: string]: unknown;
          }[];
          matchLabels?: {
            [k: string]: string;
          };
          [k: string]: unknown;
        };
        matchLabelKeys?: string[];
        maxSkew: number;
        minDomains?: number;
        nodeAffinityPolicy?: string;
        nodeTaintsPolicy?: string;
        topologyKey: string;
        whenUnsatisfiable: string;
        [k: string]: unknown;
      }[];
      volumes?: {
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
          [k: string]: unknown;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
          [k: string]: unknown;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          shareName: string;
          [k: string]: unknown;
        };
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          user?: string;
          [k: string]: unknown;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          volumeID: string;
          [k: string]: unknown;
        };
        configMap?: {
          defaultMode?: number;
          items?: {
            key: string;
            mode?: number;
            path: string;
            [k: string]: unknown;
          }[];
          name?: string;
          optional?: boolean;
          [k: string]: unknown;
        };
        csi?: {
          driver: string;
          fsType?: string;
          nodePublishSecretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          readOnly?: boolean;
          volumeAttributes?: {
            [k: string]: string;
          };
          [k: string]: unknown;
        };
        downwardAPI?: {
          defaultMode?: number;
          items?: {
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
              [k: string]: unknown;
            };
            mode?: number;
            path: string;
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        emptyDir?: {
          medium?: string;
          sizeLimit?: number | string;
          [k: string]: unknown;
        };
        ephemeral?: {
          volumeClaimTemplate?: {
            metadata?: {
              [k: string]: unknown;
            };
            spec: {
              accessModes?: string[];
              dataSource?: {
                apiGroup?: string;
                kind: string;
                name: string;
                [k: string]: unknown;
              };
              dataSourceRef?: {
                apiGroup?: string;
                kind: string;
                name: string;
                namespace?: string;
                [k: string]: unknown;
              };
              resources?: {
                limits?: {
                  [k: string]: number | string;
                };
                requests?: {
                  [k: string]: number | string;
                };
                [k: string]: unknown;
              };
              selector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              storageClassName?: string;
              volumeAttributesClassName?: string;
              volumeMode?: string;
              volumeName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
          [k: string]: unknown;
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: {
            [k: string]: string;
          };
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        flocker?: {
          datasetName?: string;
          datasetUUID?: string;
          [k: string]: unknown;
        };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
          [k: string]: unknown;
        };
        gitRepo?: {
          directory?: string;
          repository: string;
          revision?: string;
          [k: string]: unknown;
        };
        glusterfs?: {
          endpoints: string;
          path: string;
          readOnly?: boolean;
          [k: string]: unknown;
        };
        hostPath?: {
          path: string;
          type?: string;
          [k: string]: unknown;
        };
        image?: {
          pullPolicy?: string;
          reference?: string;
          [k: string]: unknown;
        };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          targetPortal: string;
          [k: string]: unknown;
        };
        name: string;
        nfs?: {
          path: string;
          readOnly?: boolean;
          server: string;
          [k: string]: unknown;
        };
        persistentVolumeClaim?: {
          claimName: string;
          readOnly?: boolean;
          [k: string]: unknown;
        };
        photonPersistentDisk?: {
          fsType?: string;
          pdID: string;
          [k: string]: unknown;
        };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
          [k: string]: unknown;
        };
        projected?: {
          defaultMode?: number;
          sources?: {
            clusterTrustBundle?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              name?: string;
              optional?: boolean;
              path: string;
              signerName?: string;
              [k: string]: unknown;
            };
            configMap?: {
              items?: {
                key: string;
                mode?: number;
                path: string;
                [k: string]: unknown;
              }[];
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            downwardAPI?: {
              items?: {
                fieldRef?: {
                  apiVersion?: string;
                  fieldPath: string;
                  [k: string]: unknown;
                };
                mode?: number;
                path: string;
                resourceFieldRef?: {
                  containerName?: string;
                  divisor?: number | string;
                  resource: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            podCertificate?: {
              certificateChainPath?: string;
              credentialBundlePath?: string;
              keyPath?: string;
              keyType: string;
              maxExpirationSeconds?: number;
              signerName: string;
              [k: string]: unknown;
            };
            secret?: {
              items?: {
                key: string;
                mode?: number;
                path: string;
                [k: string]: unknown;
              }[];
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            serviceAccountToken?: {
              audience?: string;
              expirationSeconds?: number;
              path: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
          [k: string]: unknown;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          user?: string;
          [k: string]: unknown;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: {
            name?: string;
            [k: string]: unknown;
          };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
          [k: string]: unknown;
        };
        secret?: {
          defaultMode?: number;
          items?: {
            key: string;
            mode?: number;
            path: string;
            [k: string]: unknown;
          }[];
          optional?: boolean;
          secretName?: string;
          [k: string]: unknown;
        };
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          volumeName?: string;
          volumeNamespace?: string;
          [k: string]: unknown;
        };
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    worker?: {
      activeDeadlineSeconds?: number;
      affinity?: {
        nodeAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            preference: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            weight: number;
            [k: string]: unknown;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            nodeSelectorTerms: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchFields?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        podAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            podAffinityTerm: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            };
            weight: number;
            [k: string]: unknown;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            namespaces?: string[];
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        podAntiAffinity?: {
          preferredDuringSchedulingIgnoredDuringExecution?: {
            podAffinityTerm: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              matchLabelKeys?: string[];
              mismatchLabelKeys?: string[];
              namespaceSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              namespaces?: string[];
              topologyKey: string;
              [k: string]: unknown;
            };
            weight: number;
            [k: string]: unknown;
          }[];
          requiredDuringSchedulingIgnoredDuringExecution?: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            namespaces?: string[];
            topologyKey: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      automountServiceAccountToken?: boolean;
      containers?: {
        args?: string[];
        command?: string[];
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
              [k: string]: unknown;
            };
            fileKeyRef?: {
              key: string;
              optional?: boolean;
              path: string;
              volumeName: string;
              [k: string]: unknown;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
              [k: string]: unknown;
            };
            secretKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        envFrom?: {
          configMapRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          prefix?: string;
          secretRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        image?: string;
        imagePullPolicy?: string;
        lifecycle?: {
          postStart?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          preStop?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          stopSignal?: string;
          [k: string]: unknown;
        };
        livenessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        name: string;
        ports?: {
          containerPort: number;
          hostIP?: string;
          hostPort?: number;
          name?: string;
          protocol?: string;
          [k: string]: unknown;
        }[];
        readinessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        resizePolicy?: {
          resourceName: string;
          restartPolicy: string;
          [k: string]: unknown;
        }[];
        resources?: {
          claims?: {
            name: string;
            request?: string;
            [k: string]: unknown;
          }[];
          limits?: {
            [k: string]: number | string;
          };
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        restartPolicy?: string;
        restartPolicyRules?: {
          action: string;
          exitCodes?: {
            operator: string;
            values?: number[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        securityContext?: {
          allowPrivilegeEscalation?: boolean;
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          capabilities?: {
            add?: string[];
            drop?: string[];
            [k: string]: unknown;
          };
          privileged?: boolean;
          procMount?: string;
          readOnlyRootFilesystem?: boolean;
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          runAsUser?: number;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
            [k: string]: unknown;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        startupProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        stdin?: boolean;
        stdinOnce?: boolean;
        terminationMessagePath?: string;
        terminationMessagePolicy?: string;
        tty?: boolean;
        volumeDevices?: {
          devicePath: string;
          name: string;
          [k: string]: unknown;
        }[];
        volumeMounts?: {
          mountPath: string;
          mountPropagation?: string;
          name: string;
          readOnly?: boolean;
          recursiveReadOnly?: string;
          subPath?: string;
          subPathExpr?: string;
          [k: string]: unknown;
        }[];
        workingDir?: string;
        [k: string]: unknown;
      }[];
      dnsConfig?: {
        nameservers?: string[];
        options?: {
          name?: string;
          value?: string;
          [k: string]: unknown;
        }[];
        searches?: string[];
        [k: string]: unknown;
      };
      dnsPolicy?: string;
      enableServiceLinks?: boolean;
      ephemeralContainers?: {
        args?: string[];
        command?: string[];
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
              [k: string]: unknown;
            };
            fileKeyRef?: {
              key: string;
              optional?: boolean;
              path: string;
              volumeName: string;
              [k: string]: unknown;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
              [k: string]: unknown;
            };
            secretKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        envFrom?: {
          configMapRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          prefix?: string;
          secretRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        image?: string;
        imagePullPolicy?: string;
        lifecycle?: {
          postStart?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          preStop?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          stopSignal?: string;
          [k: string]: unknown;
        };
        livenessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        name: string;
        ports?: {
          containerPort: number;
          hostIP?: string;
          hostPort?: number;
          name?: string;
          protocol?: string;
          [k: string]: unknown;
        }[];
        readinessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        resizePolicy?: {
          resourceName: string;
          restartPolicy: string;
          [k: string]: unknown;
        }[];
        resources?: {
          claims?: {
            name: string;
            request?: string;
            [k: string]: unknown;
          }[];
          limits?: {
            [k: string]: number | string;
          };
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        restartPolicy?: string;
        restartPolicyRules?: {
          action: string;
          exitCodes?: {
            operator: string;
            values?: number[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        securityContext?: {
          allowPrivilegeEscalation?: boolean;
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          capabilities?: {
            add?: string[];
            drop?: string[];
            [k: string]: unknown;
          };
          privileged?: boolean;
          procMount?: string;
          readOnlyRootFilesystem?: boolean;
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          runAsUser?: number;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
            [k: string]: unknown;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        startupProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        stdin?: boolean;
        stdinOnce?: boolean;
        targetContainerName?: string;
        terminationMessagePath?: string;
        terminationMessagePolicy?: string;
        tty?: boolean;
        volumeDevices?: {
          devicePath: string;
          name: string;
          [k: string]: unknown;
        }[];
        volumeMounts?: {
          mountPath: string;
          mountPropagation?: string;
          name: string;
          readOnly?: boolean;
          recursiveReadOnly?: string;
          subPath?: string;
          subPathExpr?: string;
          [k: string]: unknown;
        }[];
        workingDir?: string;
        [k: string]: unknown;
      }[];
      hostAliases?: {
        hostnames?: string[];
        ip: string;
        [k: string]: unknown;
      }[];
      hostIPC?: boolean;
      hostNetwork?: boolean;
      hostPID?: boolean;
      hostUsers?: boolean;
      hostname?: string;
      hostnameOverride?: string;
      imagePullSecrets?: {
        name?: string;
        [k: string]: unknown;
      }[];
      initContainers?: {
        args?: string[];
        command?: string[];
        env?: {
          name: string;
          value?: string;
          valueFrom?: {
            configMapKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
              [k: string]: unknown;
            };
            fileKeyRef?: {
              key: string;
              optional?: boolean;
              path: string;
              volumeName: string;
              [k: string]: unknown;
            };
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
              [k: string]: unknown;
            };
            secretKeyRef?: {
              key: string;
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        envFrom?: {
          configMapRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          prefix?: string;
          secretRef?: {
            name?: string;
            optional?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        image?: string;
        imagePullPolicy?: string;
        lifecycle?: {
          postStart?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          preStop?: {
            exec?: {
              command?: string[];
              [k: string]: unknown;
            };
            httpGet?: {
              host?: string;
              httpHeaders?: {
                name: string;
                value: string;
                [k: string]: unknown;
              }[];
              path?: string;
              port: number | string;
              scheme?: string;
              [k: string]: unknown;
            };
            sleep?: {
              seconds: number;
              [k: string]: unknown;
            };
            tcpSocket?: {
              host?: string;
              port: number | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          stopSignal?: string;
          [k: string]: unknown;
        };
        livenessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        name: string;
        ports?: {
          containerPort: number;
          hostIP?: string;
          hostPort?: number;
          name?: string;
          protocol?: string;
          [k: string]: unknown;
        }[];
        readinessProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        resizePolicy?: {
          resourceName: string;
          restartPolicy: string;
          [k: string]: unknown;
        }[];
        resources?: {
          claims?: {
            name: string;
            request?: string;
            [k: string]: unknown;
          }[];
          limits?: {
            [k: string]: number | string;
          };
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        restartPolicy?: string;
        restartPolicyRules?: {
          action: string;
          exitCodes?: {
            operator: string;
            values?: number[];
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        securityContext?: {
          allowPrivilegeEscalation?: boolean;
          appArmorProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          capabilities?: {
            add?: string[];
            drop?: string[];
            [k: string]: unknown;
          };
          privileged?: boolean;
          procMount?: string;
          readOnlyRootFilesystem?: boolean;
          runAsGroup?: number;
          runAsNonRoot?: boolean;
          runAsUser?: number;
          seLinuxOptions?: {
            level?: string;
            role?: string;
            type?: string;
            user?: string;
            [k: string]: unknown;
          };
          seccompProfile?: {
            localhostProfile?: string;
            type: string;
            [k: string]: unknown;
          };
          windowsOptions?: {
            gmsaCredentialSpec?: string;
            gmsaCredentialSpecName?: string;
            hostProcess?: boolean;
            runAsUserName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        startupProbe?: {
          exec?: {
            command?: string[];
            [k: string]: unknown;
          };
          failureThreshold?: number;
          grpc?: {
            port: number;
            service?: string;
            [k: string]: unknown;
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
              [k: string]: unknown;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
            [k: string]: unknown;
          };
          initialDelaySeconds?: number;
          periodSeconds?: number;
          successThreshold?: number;
          tcpSocket?: {
            host?: string;
            port: number | string;
            [k: string]: unknown;
          };
          terminationGracePeriodSeconds?: number;
          timeoutSeconds?: number;
          [k: string]: unknown;
        };
        stdin?: boolean;
        stdinOnce?: boolean;
        terminationMessagePath?: string;
        terminationMessagePolicy?: string;
        tty?: boolean;
        volumeDevices?: {
          devicePath: string;
          name: string;
          [k: string]: unknown;
        }[];
        volumeMounts?: {
          mountPath: string;
          mountPropagation?: string;
          name: string;
          readOnly?: boolean;
          recursiveReadOnly?: string;
          subPath?: string;
          subPathExpr?: string;
          [k: string]: unknown;
        }[];
        workingDir?: string;
        [k: string]: unknown;
      }[];
      nodeName?: string;
      nodeSelector?: {
        [k: string]: string;
      };
      os?: {
        name: string;
        [k: string]: unknown;
      };
      overhead?: {
        [k: string]: number | string;
      };
      preemptionPolicy?: string;
      priority?: number;
      priorityClassName?: string;
      readinessGates?: {
        conditionType: string;
        [k: string]: unknown;
      }[];
      resourceClaims?: {
        name: string;
        resourceClaimName?: string;
        resourceClaimTemplateName?: string;
        [k: string]: unknown;
      }[];
      resources?: {
        claims?: {
          name: string;
          request?: string;
          [k: string]: unknown;
        }[];
        limits?: {
          [k: string]: number | string;
        };
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: unknown;
      };
      restartPolicy?: string;
      runtimeClassName?: string;
      schedulerName?: string;
      schedulingGates?: {
        name: string;
        [k: string]: unknown;
      }[];
      securityContext?: {
        appArmorProfile?: {
          localhostProfile?: string;
          type: string;
          [k: string]: unknown;
        };
        fsGroup?: number;
        fsGroupChangePolicy?: string;
        runAsGroup?: number;
        runAsNonRoot?: boolean;
        runAsUser?: number;
        seLinuxChangePolicy?: string;
        seLinuxOptions?: {
          level?: string;
          role?: string;
          type?: string;
          user?: string;
          [k: string]: unknown;
        };
        seccompProfile?: {
          localhostProfile?: string;
          type: string;
          [k: string]: unknown;
        };
        supplementalGroups?: number[];
        supplementalGroupsPolicy?: string;
        sysctls?: {
          name: string;
          value: string;
          [k: string]: unknown;
        }[];
        windowsOptions?: {
          gmsaCredentialSpec?: string;
          gmsaCredentialSpecName?: string;
          hostProcess?: boolean;
          runAsUserName?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      serviceAccount?: string;
      serviceAccountName?: string;
      setHostnameAsFQDN?: boolean;
      shareProcessNamespace?: boolean;
      subdomain?: string;
      terminationGracePeriodSeconds?: number;
      tolerations?: {
        effect?: string;
        key?: string;
        operator?: string;
        tolerationSeconds?: number;
        value?: string;
        [k: string]: unknown;
      }[];
      topologySpreadConstraints?: {
        labelSelector?: {
          matchExpressions?: {
            key: string;
            operator: string;
            values?: string[];
            [k: string]: unknown;
          }[];
          matchLabels?: {
            [k: string]: string;
          };
          [k: string]: unknown;
        };
        matchLabelKeys?: string[];
        maxSkew: number;
        minDomains?: number;
        nodeAffinityPolicy?: string;
        nodeTaintsPolicy?: string;
        topologyKey: string;
        whenUnsatisfiable: string;
        [k: string]: unknown;
      }[];
      volumes?: {
        awsElasticBlockStore?: {
          fsType?: string;
          partition?: number;
          readOnly?: boolean;
          volumeID: string;
          [k: string]: unknown;
        };
        azureDisk?: {
          cachingMode?: string;
          diskName: string;
          diskURI: string;
          fsType?: string;
          kind?: string;
          readOnly?: boolean;
          [k: string]: unknown;
        };
        azureFile?: {
          readOnly?: boolean;
          secretName: string;
          shareName: string;
          [k: string]: unknown;
        };
        cephfs?: {
          monitors: string[];
          path?: string;
          readOnly?: boolean;
          secretFile?: string;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          user?: string;
          [k: string]: unknown;
        };
        cinder?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          volumeID: string;
          [k: string]: unknown;
        };
        configMap?: {
          defaultMode?: number;
          items?: {
            key: string;
            mode?: number;
            path: string;
            [k: string]: unknown;
          }[];
          name?: string;
          optional?: boolean;
          [k: string]: unknown;
        };
        csi?: {
          driver: string;
          fsType?: string;
          nodePublishSecretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          readOnly?: boolean;
          volumeAttributes?: {
            [k: string]: string;
          };
          [k: string]: unknown;
        };
        downwardAPI?: {
          defaultMode?: number;
          items?: {
            fieldRef?: {
              apiVersion?: string;
              fieldPath: string;
              [k: string]: unknown;
            };
            mode?: number;
            path: string;
            resourceFieldRef?: {
              containerName?: string;
              divisor?: number | string;
              resource: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        emptyDir?: {
          medium?: string;
          sizeLimit?: number | string;
          [k: string]: unknown;
        };
        ephemeral?: {
          volumeClaimTemplate?: {
            metadata?: {
              [k: string]: unknown;
            };
            spec: {
              accessModes?: string[];
              dataSource?: {
                apiGroup?: string;
                kind: string;
                name: string;
                [k: string]: unknown;
              };
              dataSourceRef?: {
                apiGroup?: string;
                kind: string;
                name: string;
                namespace?: string;
                [k: string]: unknown;
              };
              resources?: {
                limits?: {
                  [k: string]: number | string;
                };
                requests?: {
                  [k: string]: number | string;
                };
                [k: string]: unknown;
              };
              selector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              storageClassName?: string;
              volumeAttributesClassName?: string;
              volumeMode?: string;
              volumeName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        fc?: {
          fsType?: string;
          lun?: number;
          readOnly?: boolean;
          targetWWNs?: string[];
          wwids?: string[];
          [k: string]: unknown;
        };
        flexVolume?: {
          driver: string;
          fsType?: string;
          options?: {
            [k: string]: string;
          };
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        flocker?: {
          datasetName?: string;
          datasetUUID?: string;
          [k: string]: unknown;
        };
        gcePersistentDisk?: {
          fsType?: string;
          partition?: number;
          pdName: string;
          readOnly?: boolean;
          [k: string]: unknown;
        };
        gitRepo?: {
          directory?: string;
          repository: string;
          revision?: string;
          [k: string]: unknown;
        };
        glusterfs?: {
          endpoints: string;
          path: string;
          readOnly?: boolean;
          [k: string]: unknown;
        };
        hostPath?: {
          path: string;
          type?: string;
          [k: string]: unknown;
        };
        image?: {
          pullPolicy?: string;
          reference?: string;
          [k: string]: unknown;
        };
        iscsi?: {
          chapAuthDiscovery?: boolean;
          chapAuthSession?: boolean;
          fsType?: string;
          initiatorName?: string;
          iqn: string;
          iscsiInterface?: string;
          lun: number;
          portals?: string[];
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          targetPortal: string;
          [k: string]: unknown;
        };
        name: string;
        nfs?: {
          path: string;
          readOnly?: boolean;
          server: string;
          [k: string]: unknown;
        };
        persistentVolumeClaim?: {
          claimName: string;
          readOnly?: boolean;
          [k: string]: unknown;
        };
        photonPersistentDisk?: {
          fsType?: string;
          pdID: string;
          [k: string]: unknown;
        };
        portworxVolume?: {
          fsType?: string;
          readOnly?: boolean;
          volumeID: string;
          [k: string]: unknown;
        };
        projected?: {
          defaultMode?: number;
          sources?: {
            clusterTrustBundle?: {
              labelSelector?: {
                matchExpressions?: {
                  key: string;
                  operator: string;
                  values?: string[];
                  [k: string]: unknown;
                }[];
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              name?: string;
              optional?: boolean;
              path: string;
              signerName?: string;
              [k: string]: unknown;
            };
            configMap?: {
              items?: {
                key: string;
                mode?: number;
                path: string;
                [k: string]: unknown;
              }[];
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            downwardAPI?: {
              items?: {
                fieldRef?: {
                  apiVersion?: string;
                  fieldPath: string;
                  [k: string]: unknown;
                };
                mode?: number;
                path: string;
                resourceFieldRef?: {
                  containerName?: string;
                  divisor?: number | string;
                  resource: string;
                  [k: string]: unknown;
                };
                [k: string]: unknown;
              }[];
              [k: string]: unknown;
            };
            podCertificate?: {
              certificateChainPath?: string;
              credentialBundlePath?: string;
              keyPath?: string;
              keyType: string;
              maxExpirationSeconds?: number;
              signerName: string;
              [k: string]: unknown;
            };
            secret?: {
              items?: {
                key: string;
                mode?: number;
                path: string;
                [k: string]: unknown;
              }[];
              name?: string;
              optional?: boolean;
              [k: string]: unknown;
            };
            serviceAccountToken?: {
              audience?: string;
              expirationSeconds?: number;
              path: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        quobyte?: {
          group?: string;
          readOnly?: boolean;
          registry: string;
          tenant?: string;
          user?: string;
          volume: string;
          [k: string]: unknown;
        };
        rbd?: {
          fsType?: string;
          image: string;
          keyring?: string;
          monitors: string[];
          pool?: string;
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          user?: string;
          [k: string]: unknown;
        };
        scaleIO?: {
          fsType?: string;
          gateway: string;
          protectionDomain?: string;
          readOnly?: boolean;
          secretRef: {
            name?: string;
            [k: string]: unknown;
          };
          sslEnabled?: boolean;
          storageMode?: string;
          storagePool?: string;
          system: string;
          volumeName?: string;
          [k: string]: unknown;
        };
        secret?: {
          defaultMode?: number;
          items?: {
            key: string;
            mode?: number;
            path: string;
            [k: string]: unknown;
          }[];
          optional?: boolean;
          secretName?: string;
          [k: string]: unknown;
        };
        storageos?: {
          fsType?: string;
          readOnly?: boolean;
          secretRef?: {
            name?: string;
            [k: string]: unknown;
          };
          volumeName?: string;
          volumeNamespace?: string;
          [k: string]: unknown;
        };
        vsphereVolume?: {
          fsType?: string;
          storagePolicyID?: string;
          storagePolicyName?: string;
          volumePath: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  status?: {
    address?: {
      CACerts?: string;
      audience?: string;
      name?: string;
      url?: string;
      [k: string]: unknown;
    };
    addresses?: {
      CACerts?: string;
      audience?: string;
      name?: string;
      url?: string;
      [k: string]: unknown;
    }[];
    annotations?: {
      [k: string]: string;
    };
    conditions?: {
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      severity?: string;
      status: string;
      type: string;
      [k: string]: unknown;
    }[];
    observedGeneration?: number;
    url?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
